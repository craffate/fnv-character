import { Perk } from "@interfaces/perk";
import { ActorValue } from "@interfaces/actor-value";
import { ActorValueType } from "@enums/actor-value-type";
import { ActorValueCode } from "@enums/actor-value-code";

export class Character {
  private _name: string;
  private _experience: number;
  private _actorValues: ActorValue.AV[];
  private _perks: Perk[];

  constructor(name: string, experience: number, actorValue: ActorValue.AV[], perks: Perk[]) {
    this._name = name;
    this._experience = experience;
    this._actorValues = actorValue;
    this._perks = perks;
  }

  public get name() : string {
    return this._name;
  }

  public set name(v : string) {
    this._name = v;
  }

  public get experience() : number {
    return this._experience
  }

  public set experience(v : number) {
    this._experience = v;
  }

  public get actorValues() : ActorValue.AV[] {
    return this._actorValues
  }

  public set actorValues(v : ActorValue.AV[]) {
    this._actorValues = v;
  }

  public get perks() : Perk[] {
    return this._perks;
  }

  public set perks(v : Perk[]) {
    this._perks = v;
  }

  public getActorValues(type?: ActorValueType): ActorValue.AV[] {
    return this.actorValues.filter(av => av.type === type);
  }

  public getActorValue(code: ActorValueCode): ActorValue.AV | undefined {
    return this.actorValues.find(av => av.code === code);
  }

  public calcSkills(): void {
    const special = this.getActorValues(ActorValueType.Primary);
    const luck = this.getActorValue(ActorValueCode.Luck);

    this.actorValues = this.actorValues.map((av) => {
      let primary;

      switch (av.code) {
        case ActorValueCode.Barter:
        case ActorValueCode.Speech:
        primary = special.find(av => av.code === ActorValueCode.Charisma);
        break;
        case ActorValueCode.EnergyWeapons:
        case ActorValueCode.Explosives:
        primary = special.find(av => av.code === ActorValueCode.Perception);
        break;
        case ActorValueCode.Medicine:
        case ActorValueCode.Repair:
        case ActorValueCode.Science:
        primary = special.find(av => av.code === ActorValueCode.Intelligence);
        break;
        case ActorValueCode.MeleeWeapons:
        primary = special.find(av => av.code === ActorValueCode.Strength);
        break;
        case ActorValueCode.Guns:
        case ActorValueCode.Sneak:
        primary = special.find(av => av.code === ActorValueCode.Agility);
        break;
        case ActorValueCode.Survival:
        case ActorValueCode.Unarmed:
        primary = special.find(av => av.code === ActorValueCode.Endurance);
        break;
      }
      if (primary && luck) {
        av.baseValue.derivedValue = 2 + (2 * primary.baseValue.referenceBaseValue) + Math.ceil(luck.baseValue.referenceBaseValue / 2);
      }
      return av;
    });
  }

  public getBaseActorValue(av: ActorValue.AV): number {
    let ret: number;

    ret = av.baseValue.referenceBaseValue;
    if (av.baseValue.setAvOverride || av.baseValue.derivedValue) {
      ret = (av.baseValue.derivedValue || 0.00) + (av.baseValue.setAvOverride || 0.00);
    }
    return ret;
  }

  public getBaseAC = this.getBaseActorValue;

  public getActorValueModifier(av: ActorValue.AV, filter?: number): number {
    switch (filter) {
      case 1:
        return av.modifiers.perm;
      case 2:
        return av.modifiers.temp;
      case 3:
      default:
        return av.modifiers.perm + av.modifiers.temp;
    }
  }

  public getAVMod = this.getActorValueModifier;

  public getPermanentActorValue(av: ActorValue.AV): number {
    return this.getBaseActorValue(av) + this.getActorValueModifier(av, 1);
  }

  public getPermanentAV = this.getPermanentActorValue;

  public getActorValueInfo(av: ActorValue.AV): string {
    const computedBase: number = this.getBaseActorValue(av);
    const levelupValue: number = this.getPermanentActorValue(av);
    const currentValue: number = levelupValue + this.getActorValueModifier(av, 2);


    return (`getActorValueInfo: ${av.name} on ${this.name}
...Current Value: ${currentValue.toFixed(2)} Computed Base: ${computedBase.toFixed(2)}
...Base Value components:
......Reference Base Value: ${av.baseValue.referenceBaseValue.toFixed(2)}
......Derived Value: ${av.baseValue.derivedValue?.toFixed(2)}
......SetAV override: ${av.baseValue.setAvOverride?.toFixed(2)}
...Modifiers: Temp: ${av.modifiers.temp.toFixed(2)} Perm: ${av.modifiers.perm.toFixed(2)} Damage: ${av.modifiers.damage.toFixed(2)}
...Level-up Value: ${levelupValue.toFixed(2)}`);
  }

  public getAVInfo = this.getActorValueInfo;
}
