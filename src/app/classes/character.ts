import { Perk } from "@interfaces/perk";
import { ActorValue } from "@interfaces/actor-value";
import { ActorValueType } from "@enums/actor-value-type";
import { ActorValueCode } from "@enums/actor-value-code";

export class Character {
  private _name: string;
  private _experience: number;
  private _actorValues: ActorValue[];
  private _perks: Perk[];

  constructor(name: string, experience: number, actorValue: ActorValue[], perks: Perk[]) {
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

  public get actorValues() : ActorValue[] {
    return this._actorValues
  }

  public set actorValues(v : ActorValue[]) {
    this._actorValues = v;
  }

  public get perks() : Perk[] {
    return this._perks;
  }

  public set perks(v : Perk[]) {
    this._perks = v;
  }

  public getActorValues(type?: ActorValueType): ActorValue[] {
    return this.actorValues.filter(av => av.type === type);
  }

  public getActorValue(code: ActorValueCode): ActorValue | undefined {
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
        av.baseValue = 2 + (2 * primary.baseValue) + Math.ceil(luck.baseValue / 2);
      }
      return av;
    })
  }
}
