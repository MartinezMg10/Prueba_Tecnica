import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import Tarjeta from "../components/Tarjeta"

const HomePage = () => {

  const {onClickLoadMore} = useContext(PokemonContext)
  const { allPokemons} = useContext(PokemonContext)

  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center items-center  my-5">
      {allPokemons.map(pokemon => (
								<Tarjeta pokemon={pokemon} key={pokemon.id} />
							))}
      </div>
      <div className="flex justify-center items-center">
                <button className='ov-btn-slide-left mb-10 font-bold mt-4' onClick={onClickLoadMore}>
                    Cargar más...
                </button>
            </div>
    </>
  )
}

export default HomePage
