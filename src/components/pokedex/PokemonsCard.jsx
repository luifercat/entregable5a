import { useEffect, useState } from "react";
import {
  getPokemonsByUrl,
  joinPokemosType,
} from "../../services/pokemons.services";
import StatList from "./StatList";
import {
  bgStylePokemonType,
  borderStyledPokemonByType,
  textStyledPokemonByType,
} from "../../shared/pokemon";
import { Link } from "react-router-dom";

const PokemonsCard = ({ pokemonUrl }) => {
  const [pokemonsInfo, setPokemonsInfo] = useState(null);

  useEffect(() => {
    getPokemonsByUrl(pokemonUrl)
      .then((data) => setPokemonsInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link
      to={`/pokedex/${pokemonsInfo?.id}`}
      className={`text-center capitalize border-[5px] rounded-md ${
        borderStyledPokemonByType[pokemonsInfo?.types[0]]
      }`}
    >
      <header
        className={`h-[80px]  relative mb-8 ${
          bgStylePokemonType[pokemonsInfo?.types[0]]
        }`}
      >
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 h-[65px] aspect-square">
          <img
            className="h-full w-full object-contain"
            src={pokemonsInfo?.image}
            alt=""
          />
        </div>
      </header>
      <section>
        <h3
          className={`text- font-bold ${
            textStyledPokemonByType[pokemonsInfo?.types[0]]
          } `}
        >
          {pokemonsInfo?.name}
        </h3>
        <h4>{joinPokemosType(pokemonsInfo?.types)}</h4>
        <h5 className="text-sm mb-2">Types</h5>
        <hr />
        <StatList stats={pokemonsInfo?.stats} />
      </section>
    </Link>
  );
};
export default PokemonsCard;
