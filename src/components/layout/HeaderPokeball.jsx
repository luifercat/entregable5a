import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/trainer.slice";

const HeaderPokeball = ({ children }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <section>
      <header>
        {" "}
        <div className="h-16 bg-red relative ">
          <div className="absolute left-0 bottom-0 w-[175px] sm:w-[300px] ml-12">
            <img src="/images/pokemonBanner.png" alt="" />
          </div>
        </div>
        <div className="h-12 bg-black relative">
          <button
            onClick={handleLogout}
            className="h-16 aspect-square bg-white rounded-full absolute right-0 -translate-x-1/2 -top-8 border-[10px] border-black after:block after:content-[''] after:h-8 after:aspect-square after:bg-slate after:rounded-full after:absolute after:left-1/2  after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-[6px] after:border-black transition-colors hover:bg-red cursor-pointer"
          ></button>
          <span className="flex flex-row-reverse bg-transparent text-white relative pt-6 pr-12">
            EXIT
          </span>
        </div>
      </header>
      {children}
    </section>
  );
};
export default HeaderPokeball;
