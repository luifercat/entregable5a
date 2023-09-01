import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StartBarrLIst from "../components/StartBarrLIst";
import { bgStylePokemonType } from "../shared/pokemon";
import { getPokemonsById } from "../services/pokemons.services";

const PokemonDetail = () => {
  const [PokemonDetail, setPokemonDetail] = useState(null);

  const { poquemonId } = useParams();

  useEffect(() => {
    getPokemonsById(poquemonId)
      .then((data) => setPokemonDetail(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main
      className=" flex justify-center items-center 
mt-[10%] md:mt-12 "
    >
      <article
        className={`w-[min(100%,_400px)] shadow-2xl mx-3 rounded-xl mb-5 ${
          bgStylePokemonType[PokemonDetail?.types[0]]
        }`}
      >
        <header className="">
          <div className="flex justify-center items-center -mt-8 ">
            <img
              className="h-full  object-contain md:w-28 md:h-auto"
              src={PokemonDetail?.image}
              alt=""
            />
          </div>

          <div className="flex justify-center items-center">
            <span className="border-2 border-slate/25 p-1 mt-3 font-bold text-lg">
              #{PokemonDetail?.id}
            </span>
          </div>

          <div className="flex justify-center items-center mt-2 mb-2 font-bold text-2xl">
            <h1 className="bg-white p-1 shadow-[0_5px_5px_5px_rgba(2,2,2,0.3)] rounded-full mb-4">
              {PokemonDetail?.name}
            </h1>
          </div>

          <div className="flex justify-evenly items-center">
            <h4 className="flex flex-col justify-items-center items-center">
              <span className="font-semibold bg-white p-1 shadow-[0_5px_5px_5px_rgba(2,2,2,0.3)] rounded-full mb-2">
                weight
              </span>
              <span> {PokemonDetail?.weight} </span>
            </h4>
            <h4 className="flex flex-col justify-items-center items-center">
              <span className="font-semibold bg-white p-1 shadow-[0_5px_5px_5px_rgba(2,2,2,0.3)] rounded-full mb-2">
                height
              </span>
              <span>{PokemonDetail?.height}</span>
            </h4>
          </div>

          <div className="flex justify-evenly items-center mt-2 mb-2">
            <h4 className="mr-32 flex flex-col justify-items-center items-center">
              <span className="font-semibold bg-white p-1 shadow-[0_5px_5px_5px_rgba(2,2,2,0.3)] rounded-full mb-2">
                Type
              </span>

              <span>{PokemonDetail?.types}</span>
            </h4>
            <h4 className="flex flex-col justify-items-center items-center">
              <span className="font-semibold bg-white p-1 shadow-[0_5px_5px_5px_rgba(2,2,2,0.3)] rounded-full mb-2">
                Skill
              </span>
              <span>{PokemonDetail?.abilities[0].ability["name"]}</span>
            </h4>
          </div>
        </header>
        <section>
          <StartBarrLIst stats={PokemonDetail?.stats} />
        </section>
      </article>
    </main>
  );
};

export default PokemonDetail;
