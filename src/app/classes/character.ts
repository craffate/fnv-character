import { Perk } from "@interfaces/perk";
import { ActorValue } from "@interfaces/actor-value";
import { ActorValueType } from "@enums/actor-value-type";

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

}
