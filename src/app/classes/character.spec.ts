import { Character } from './character';

describe('Character', () => {
  it('should create an instance', () => {
    expect(new Character('Courier', 0, [], [])).toBeTruthy();
  });
});
