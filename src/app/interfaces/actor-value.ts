import { ActorValueCode } from "@enums/actor-value-code"
import { ActorValueType } from "@enums/actor-value-type"

export interface ActorValue {
  code: ActorValueCode;
  name: string;
  type: ActorValueType;
  inGameName: string | null;
  abbreviation: string;
  description: string | null;
  baseValue: number;
  currentValue: number;
}
