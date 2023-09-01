import { useDispatch } from "react-redux";
import FooterPokeBall from "../components/layout/footerPokeBall";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

//Este componente representa la página de inicio.
//Permite al usuario enviar un formulario para ingresar el nombre del entrenador.
//Al enviar el formulario, actualiza el estado con el nombre del entrenador y navega a la página "/pokedex".
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <main className="min-h-screen grid  grid-rows-[1fr_auto]">
      <section>
        <article className="flex flex-col justify-items-center items-center mt-32">
          <div className="p-5">
            <img src="/images/pokemonBanner.png" alt="" />
          </div>
          <h2>
            {" "}
            <span className="text-red font-bold text-3xl">¡Hello trainer!</span>
          </h2>
          <p className="mb-5 text-lg font-semibold">
            To start, give me your name
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="drop-shadow-xl p-3"
              placeholder="your name ...."
              required
              autoComplete="off"
              id="nameTrainer"
              type="text"
            />
            <button className="bg-red p-3 drop-shadow-xl text-center text-white font-bold ">
              Start
            </button>
          </form>
        </article>
      </section>
      <FooterPokeBall />
    </main>
  );
};

export default Home;
