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
  },
  {
    code: ActorValueCode.Barter,
    name: "Barter",
    type: ActorValueType.Skill,
    inGameName: "Barter",
    abbreviation: "Barter",
    description: "The Barter skill affects the prices you get for buying and selling items. In general, the higher your Barter skill, the lower your prices on purchased items.  ",
    baseValue: 15,
    currentValue: 15
  },
  {
    code: ActorValueCode.EnergyWeapons,
    name: "EnergyWeapons",
    type: ActorValueType.Skill,
    inGameName: "Energy Weapons",
    abbreviation: "Ener. Weap.",
    description: "The Energy Weapons skill determines your effectiveness with any weapon that uses Small Energy Cells, Micro Fusion Cells, EC Packs, or Flamer Fuel as ammunition.",
    baseValue: 15,
    currentValue: 15
  },
  {
    code: ActorValueCode.Explosives,
    name: "Explosives",
    type: ActorValueType.Skill,
    inGameName: "Explosives",
    abbreviation: "Explos.",
    description: "The Explosives skill determines the ease of disarming any hostile mines and the effectiveness of any explosive weapon (all mines, all grenades, Missile Launcher, Fat Man, etc.).",
    baseValue: 15,
    currentValue: 15
  },
  {
    code: ActorValueCode.Lockpick,
    name: "Lockpick",
    type: ActorValueType.Skill,
    inGameName: "Lockpick",
    abbreviation: "Lockpick",
    description: "The Lockpick skill is used to open locked doors and containers.  ",
    baseValue: 15,
    currentValue: 15
  },
  {
    code: ActorValueCode.Medicine,
    name: "Medicine",
    type: ActorValueType.Skill,
    inGameName: "Medicine",
    abbreviation: "Med.",
    description: "The Medicine skill determines how many Hit Points you'll replenish upon using a Stimpak, and the effectiveness of Rad-X and RadAway.",
    baseValue: 15,
    currentValue: 15
  },
  {
    code: ActorValueCode.MeleeWeapons,
    name: "MeleeWeapons",
    type: ActorValueType.Skill,
    inGameName: "Melee Weapons",
    abbreviation: "Melee Weap.",
    description: "The Melee Weapons skill determines your effectiveness with any melee weapon, from the simple lead pipe all the way up to the high-tech Super Sledge.",
    baseValue: 15,
    currentValue: 15
  },
  {
    code: ActorValueCode.Repair,
    name: "Repair",
    type: ActorValueType.Skill,
    inGameName: "Repair",
    abbreviation: "Repair",
    description: "The Repair skill allows you to maintain any weapons and apparel. In addition, Repair allows you to create items and Guns ammunition at reloading benches.",
    baseValue: 15,
    currentValue: 15
  },
  {
    code: ActorValueCode.Science,
    name: "Science",
    type: ActorValueType.Skill,
    inGameName: "Science",
    abbreviation: "Science",
    description: "The Science skill represents your combined scientific knowledge, and is primarily used to hack restricted computer terminals. It can also be used to recycle Energy Weapon ammunition at workbenches.",
    baseValue: 15,
    currentValue: 15
  },
  {
    code: ActorValueCode.Guns,
    name: "Guns",
    type: ActorValueType.Skill,
    inGameName: "Guns",
    abbreviation: "Guns",
    description: "Guns determines your effectiveness with any weapon that uses conventional ammunition (.22 LR, .357 Magnum, 5mm, 10mm, 5.56mm, .308, .45-70 Gov't etc.).",
    baseValue: 15,
    currentValue: 15
  },
  {
    code: ActorValueCode.Sneak,
    name: "Sneak",
    type: ActorValueType.Skill,
    inGameName: "Sneak",
    abbreviation: "Sneak",
    description: "The higher your Sneak skill, the easier it is to remain undetected, steal an item, or pick someone's pocket. Successfully attacking while undetected grants an automatic critical hit.",
    baseValue: 15,
    currentValue: 15
  },
  {
    code: ActorValueCode.Speech,
    name: "Speech",
    type: ActorValueType.Skill,
    inGameName: "Speech",
    abbreviation: "Speech",
    description: "The Speech skill governs how much you can influence someone through dialogue, and gain access to information they might otherwise not want to share.   ",
    baseValue: 15,
    currentValue: 15
  },
  {
    code: ActorValueCode.Survival,
    name: "Survival",
    type: ActorValueType.Skill,
    inGameName: "Survival",
    abbreviation: "Survival",
    description: "The Survival skill increases the Hit Points you receive from food and drink. It also helps you create consumable items at campfires.",
    baseValue: 15,
    currentValue: 15
  },
  {
    code: ActorValueCode.Unarmed,
    name: "Unarmed",
    type: ActorValueType.Skill,
    inGameName: "Unarmed",
    abbreviation: "Unarmed",
    description: "The Unarmed skill is used for fighting without a weapon, or with weapons designed for hand-to-hand combat, like Brass Knuckles, Power Fists, and Displacer Gloves.",
    baseValue: 15,
    currentValue: 15
  }
];
