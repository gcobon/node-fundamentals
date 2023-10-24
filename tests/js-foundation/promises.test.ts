import { getPokemonById } from './../../src/js-foundation/promises';

describe('js-foundation/promises', () => {
  test('getPokemonById should return pokemon', async () => {
    const id = 1;

    const pokemonName = await getPokemonById(id);
    expect(pokemonName).toBe('bulbasaur');
  });

  test('getPokemonById should return an error', async () => {
    const id = -1;

    try {
      await getPokemonById(id);
      expect(true).toBeFalsy();
    } catch (error) {
      console.log(error);
      expect(error).toBe(`Pokemon whit id ${id} not found`);
    }
  });
});
