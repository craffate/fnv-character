import { TestBed } from '@angular/core/testing';
import { Character } from '@classes/character';

import { CharacterService } from './character.service';
import { DEFAULT_CHARACTER } from './default-character';

describe('CharacterService', () => {
  let service: CharacterService;
  let character: Character;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return DEFAULT_CHARACTER', () => {
    service.getCharacter().subscribe(v => {
      character = v;
      expect(v).toEqual(DEFAULT_CHARACTER);
    });
  })
});
