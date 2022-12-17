import { Injectable } from '@angular/core';
import { Character } from '@classes/character';
import { DEFAULT_CHARACTER } from './default-character';
import { Observable, of } from 'rxjs';

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

  updateCharacter(character: Character): void {
    this.character = character;
  }

  resetCharacter(): Observable<Character> {
    this.character = DEFAULT_CHARACTER;
    return of(this.character);
  }

}
