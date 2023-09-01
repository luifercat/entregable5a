import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getAllPokemons,
  getAllTypes,
  getPokemonsByType,
} from "../services/pokemons.services";
import PokemonsList from "../components/pokedex/PokemonsList";
import { paginateData } from "../utils/pagination";
import Pagination from "../components/pokedex/Pagination";

//Este componente muestra una lista de pokémons obtenidos y almacenados en el estado local.
//Utiliza el estado 'pokemons' para almacenar los datos.
//Utiliza 'useSelector' para obtener el nombre del entrenador del estado global.
//La función 'useEffect' se emplea para cargar los pokémons al montar el componente.
const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonsType, setPokemonType] = useState("");
  const [types, setTypes] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);

  const { name } = useSelector((store) => store.traner);
  /*
  const handleChangeInput = (e) => {
    setPokemonName(e.target.value);
  };

  const handleChangeSelect = (e) => {
    setPokemonType(e.target.value);
  };
*/
  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
  );

  useEffect(() => {
    if (!pokemonsType) {
      getAllPokemons()
        .then((data) => setPokemons(data))
        .catch((err) => console.log(err));
    }
  }, [pokemonsType]);

  useEffect(() => {
    if (pokemonsType) {
      getPokemonsByType(pokemonsType).then((data) => setPokemons(data));
    }
  }, [pokemonsType]);

  useEffect(() => {
    getAllTypes()
      .then((types) => setTypes(types))
      .catch((err) => console.log(err));
  }, []);

  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonsByName,
    currentPage
  );

  return (
    <main className="mx-10">
      <section className="ml-5">
        <p className="line-clamp-1 my-4">
          <span className="text-red font-semibold">Welcome {name}, </span>
          Here you can get your favorite pokemon
        </p>
        <form className="flex flex-row flex-wrap justify-evenly">
          <div>
            <input
              className="drop-shadow-xl"
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search Pokemo...."
              type="text"
              id=""
            />
          </div>
          <select
            className="my-4 -mt-1"
            value={pokemonsType}
            onChange={handleChange(setPokemonType)}
          >
            <option value="">All pokemons</option>
            {types.map((type) => (
              <option key={type.name} value={type.name} className="capitalize">
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>

      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setcurrentPage={setcurrentPage}
        currentPage={currentPage}
      />

      <PokemonsList pokemons={itemsInCurrentPage} />

      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setcurrentPage={setcurrentPage}
        currentPage={currentPage}
      />
    </main>
  );
};

export default Pokedex;
