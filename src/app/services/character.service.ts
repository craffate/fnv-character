import { Injectable } from '@angular/core';
import { Character } from '@classes/character';
import { DEFAULT_CHARACTER } from './default-character';
import { Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ActorValueType } from '@enums/actor-value-type';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  character: Character;

  constructor() {
    this.character = DEFAULT_CHARACTER;
  }

  getCharacter(): Observable<Character> {
    return of(this.character);
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
          av.baseValue.derivedValue = formValue[1];
        }
      }
    });
    this.character.perks = characterForm.value['perks'];
    this.character.calcSkills();
  }

  resetCharacter(): Observable<Character> {
    this.character = DEFAULT_CHARACTER;
    return of(this.character);
  }

}
