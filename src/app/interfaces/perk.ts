export interface Perk {
  readonly id: string;
  readonly name: string;
  readonly perkIcon: any;
  readonly trait: boolean;
  readonly playable: boolean;
  readonly hidden: boolean;
  readonly level: number;
  readonly numRanks: number;
  readonly perkDescription: string;
  readonly conditions: any;
  readonly perkEntries: any;
}
