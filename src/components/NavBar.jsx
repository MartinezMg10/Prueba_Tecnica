import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { PokemonContext } from "../context/PokemonContext"
import { useNavigate } from "react-router-dom"

const NavBar = () => {

  const { onInputChange, valueSearch, onResetForm } = useContext(PokemonContext);

const navigate = useNavigate();

const onSearchSubmit = e => {
  e.preventDefault();
  navigate('/search', {
    state: valueSearch,
  });

  onResetForm();
};

  return (
    <>
        <nav className="flex flex-col w-[100%] flex-wrap justify-center items-center">
            <Link to="/">
            <img className="h-[100px] w-[20vw]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"/>
            </Link>
            <div className="mt-5  h-[10vh] w-[50vw] rounded-2xl flex  bg-white border-2">
            <form onSubmit={onSearchSubmit}>
            <div>
            <input
              className="outline-none  h-[9vh] w-[44vw] p-5 rounded-2xl "
              type='search'
							name='valueSearch'
							value={valueSearch}
							onChange={onInputChange}
							placeholder='Buscar nombre de pokemon'
            />
            </div>
            </form>
            </div>
        </nav>

      <Outlet />
    </>
  )
}

export default NavBar
