import { characters } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring', () => {
  const heroes = characters.map((c) => c.toLocaleLowerCase());

  test('characters should be an array with least 4 elements', () => {
    expect(heroes.length).toBeGreaterThanOrEqual(4);
  });

  test('characters should contain "batman" and "flash"', () => {
    expect(heroes).toContain('batman');
    expect(heroes).toContain('flash');
  });

  test('characters should be in first position to "flash" ans second "batman"', () => {
    expect(heroes[0]).toBe('flash');
    expect(heroes[1]).toBe('batman');
  });
});
