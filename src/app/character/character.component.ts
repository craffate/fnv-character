import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActorValueType } from '@enums/actor-value-type';
import { ActorValue } from '@interfaces/actor-value';
import { Character } from '@classes/character';
import { CharacterService } from '@services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent {
  character: Character | undefined = undefined;
  characterForm: FormGroup = new FormGroup({});

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.getCharacter();
    if (this.character) {
      this.characterForm.addControl('name', new FormControl(this.character.name));
      this.characterForm.addControl('experience', new FormControl(this.character.experience));
      this.characterForm.addControl('actorValues', new FormGroup({}));
      this.character.actorValues.forEach((av) => {
        const avFormGroup = this.characterForm.get('actorValues') as FormGroup;

        avFormGroup.addControl(av.name, new FormControl(this.character!.getPermanentActorValue(av)));
      });
      this.characterForm.addControl('perks', new FormControl(this.character.perks));
    }
  }

  private setForm(): void {
    if (this.character) {
      this.characterForm.patchValue({
        'name': this.character.name,
        'experience': this.character.experience,
        'perks': this.character.perks
      });
      this.character.actorValues.forEach((av) => {
        const formValue = this.characterForm.get('actorValues')?.get(av.name);

        formValue?.patchValue(this.character!.getPermanentActorValue(av));
      })
    }
  }

  getCharacter(): void {
    this.character = this.characterService.getCharacter();
  }

  updateCharacter(): void {
    this.characterService.updateCharacter(this.characterForm);
  }

  resetCharacter(): void {
    this.characterService.resetCharacter();
    this.getCharacter();
  }

  getActorValues(type?: ActorValueType): ActorValue.AV[] | undefined {
    if (this.character) {
      return this.character.getActorValues(type);
    }
    return undefined;
  }

  onSubmit(): void {
    this.updateCharacter();
    this.getCharacter();
    this.setForm();
  }
}
