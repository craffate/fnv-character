import { ActorValue } from "@interfaces/actor-value";
import { ActorValueCode } from "@enums/actor-value-code";
import { ActorValueType } from "@enums/actor-value-type";

export const DEFAULT_ACTORVALUES: ActorValue[] = [
  {
    code: ActorValueCode.Strength,
    name: "Strength",
    type: ActorValueType.Primary,
    inGameName: "Strength",
    abbreviation: "STR",
    description: "Strength is a measure of your raw physical power. It affects how much you can carry, the power of all melee attacks, and your effectiveness with many heavy weapons.",
    baseValue: 5,
    currentValue: 5
  },
  {
    code: ActorValueCode.Perception,
    name: "Perception",
    type: ActorValueType.Primary,
    inGameName: "Perception",
    abbreviation: "PER",
    description: "A high Perception grants a bonus to the Explosives, Lockpick and Energy Weapons skills, and determines when red compass markings appear (which indicate threats).",
    baseValue: 5,
    currentValue: 5
  },
  {
    code: ActorValueCode.Endurance,
    name: "Endurance",
    type: ActorValueType.Primary,
    inGameName: "Endurance",
    abbreviation: "END",
    description: "Endurance is a measure of your overall physical fitness. A high Endurance gives bonuses to health, environmental resistances, and the Survival and Unarmed skills.",
    baseValue: 5,
    currentValue: 5
  },
  {
    code: ActorValueCode.Charisma,
    name: "Charisma",
    type: ActorValueType.Primary,
    inGameName: "Charisma",
    abbreviation: "CHR",
    description: "Having a high Charisma will improve people's disposition toward you, and give bonuses to both the Barter and Speech skills.  ",
    baseValue: 5,
    currentValue: 5
  },
  {
    code: ActorValueCode.Intelligence,
    name: "Intelligence",
    type: ActorValueType.Primary,
    inGameName: "Intelligence",
    abbreviation: "INT",
    description: "Intelligence affects the Science, Repair and Medicine skills. The higher your Intelligence, the more Skill Points you'll be able to distribute when you level up.",
    baseValue: 5,
    currentValue: 5
  },
  {
    code: ActorValueCode.Agility,
    name: "Agility",
    type: ActorValueType.Primary,
    inGameName: "Agility",
    abbreviation: "AGL",
    description: "Agility affects your Guns and Sneak skills, and the number of Action Points available for V.A.T.S.",
    baseValue: 5,
    currentValue: 5
  },
  {
    code: ActorValueCode.Luck,
    name: "Luck",
    type: ActorValueType.Primary,
    inGameName: "Luck",
    abbreviation: "LCK",
    description: "Raising your Luck will raise all of your skills a little. Having a high Luck will also improve your critical chance with all weapons.    ",
    baseValue: 5,
    currentValue: 5
  }
];
