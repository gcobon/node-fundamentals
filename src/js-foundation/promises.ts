import { httpClient } from '../plugins';

export const getPokemonById = async (id: number): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  try {
    const pokemon = await httpClient.get(url);
    return pokemon.name;
  } catch (error) {
    throw `Pokemon whit id ${id} not found`;
  }
};
