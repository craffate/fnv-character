import { ActorValueCode } from "@enums/actor-value-code"
import { ActorValueType } from "@enums/actor-value-type"

export namespace ActorValue {
  export interface BaseValue {
    referenceBaseValue: number;
    derivedValue: number | undefined;
    setAvOverride: number | undefined;
  }

  export interface Modifiers {
    temp: number;
    perm: number;
    damage: number;
  }

  export interface AV {
    code: ActorValueCode;
    name: string;
    type: ActorValueType;
    inGameName: string | null;
    abbreviation: string;
    description: string | null;
    baseValue: BaseValue;
    modifiers: Modifiers;
  }
}
