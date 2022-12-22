import { Injectable } from '@angular/core';
import { Character } from '@classes/character';
import { DEFAULT_CHARACTER } from './default-character';
import { FormGroup } from '@angular/forms';
import { ActorValueType } from '@enums/actor-value-type';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  character: Character;

  constructor() {
    this.character = DEFAULT_CHARACTER;
    this.character.calcSkills();
  }

  getCharacter(): Character {
    return this.character;
  }

  updateCharacter(characterForm: FormGroup): void {
    this.character.name = characterForm.value['name'];
    this.character.experience = characterForm.value['experience'];
    this.character.actorValues.forEach((av) => {
      const formValue = Object.entries(characterForm.value['actorValues'] as Array<number>).find(k => av.name === k[0]);

      if (formValue) {
        if (ActorValueType.Primary === av.type) {
          av.baseValue.referenceBaseValue = formValue[1];
        } else {
          av.baseValue.setAvOverride = (av.baseValue.setAvOverride || 0.00) + formValue[1] - this.character.getPermanentActorValue(av);
        }
      }
    });
    this.character.perks = characterForm.value['perks'];
    this.character.calcSkills();
  }

  resetCharacter(): Character {
    this.character = DEFAULT_CHARACTER;
    return this.character;
  }

}
