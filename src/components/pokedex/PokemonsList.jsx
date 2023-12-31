import PokemonsCard from "./PokemonsCard";

const PokemonsList = ({ pokemons }) => {
  return (
    <section className="grid px-4 gap-4 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]">
      {pokemons.map((pokemon) => (
        <PokemonsCard key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};
export default PokemonsList;
