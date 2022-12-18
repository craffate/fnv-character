import { Component } from '@angular/core';
import { Character } from '@classes/character';
import { ActorValueType } from '@enums/actor-value-type';
import { ActorValue } from '@interfaces/actor-value';
import { CharacterService } from '@services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent {
  character: Character | undefined = undefined;

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    this.characterService.getCharacter()
    .subscribe(character => this.character = character);
  }

  updateCharacter(): void {
    if (this.character) {
      this.characterService.updateCharacter(this.character);
    }
  }

  resetCharacter(): void {
    this.characterService.resetCharacter();
    this.getCharacter();
  }

  getActorValues(type?: ActorValueType): ActorValue[] | undefined {
    if (this.character) {
      return this.character.getActorValues(type);
    }
    return undefined;
  }

  onSubmit(): void {
    this.updateCharacter();
    this.getCharacter();
  }
}
