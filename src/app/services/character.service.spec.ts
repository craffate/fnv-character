import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';
import { DEFAULT_CHARACTER } from './default-character';

describe('CharacterService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return DEFAULT_CHARACTER', () => {
    expect(service.getCharacter()).toEqual(DEFAULT_CHARACTER);
  });
});
