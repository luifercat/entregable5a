import axios from "axios";

//Esta función realiza una solicitud a una API para obtener una lista de Pokémon.
//Retorna una lista de resultados de Pokémon obtenidos de la URL proporcionada.
export const getAllPokemons = async () => {
  // uso temporar del enlace
  const URL = " https://pokeapi.co/api/v2/pokemon?limit=1281";
  const { data } = await axios.get(URL); //await hace una espera en esta linea
  return data.results;
};

export const getAllTypes = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/type");
  return data.results;
};

export const getPokemonsByType = async (pokemonsType) => {
  const url = `https://pokeapi.co/api/v2/type/${pokemonsType}`;
  const { data } = await axios.get(url);
  const fomatPokemons = data.pokemon.map(({ pokemon }) => pokemon);
  return fomatPokemons;
};

export const getPokemonsById = async (poquemonId) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${poquemonId}/`;
  const { data } = await axios.get(url);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    weight: data.weight,
    height: data.height,
    abilities: data.abilities,
    moves: data.moves,
  };
  return pokemon;
};

//Esta función obtiene información detallada de un Pokémon usando su URL.
//Formatea los datos recibidos en un objeto Pokémon con propiedades específicas.
//Realiza una solicitud HTTP a la URL del Pokémon.
//Formatea los datos recibidos en un objeto Pokémon.
export const getPokemonsByUrl = async (pokemonUrl) => {
  const { data } = await axios.get(pokemonUrl);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
  };
  //console.log(pokemon);
  return pokemon;
};

const formatStats = (stats) => {
  return stats.map((stat) => ({ name: stat.stat.name, value: stat.base_stat }));
};

const formatTypes = (types) => {
  return types.map((type) => type.type.name);
};

export const joinPokemosType = (types = []) => {
  return types.slice(0, 2).join(" / ");
};
