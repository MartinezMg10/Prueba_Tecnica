import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { PokemonContext } from '../context/PokemonContext';
import { typeColors } from '../components/Tarjeta';


const pokemonPage = () => {
  const { llamarPokemonId } = useContext(PokemonContext);

	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState({});

	const { id } = useParams();

	const fetchPokemon = async id => {
		const data = await llamarPokemonId(id);
		setPokemon(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchPokemon(id);
	}, []);

	console.log(pokemon)



  return (
    <>
      <main className='flex flex-col my-10 mx-36 justify-center '>
			{loading ? (
				<Loader />
			) : (
				<>
					<div className='mt-5 flex items-center relative'>
						<span className='absolute top-[10vh] left-0 text-8xl font-bold'>#{pokemon.id}</span>
						<div className='order-2 flex-1 p-6 h-[400px]'>
							<img
								src={pokemon.sprites.other.dream_world.front_default}
								alt={`Pokemon ${pokemon?.name}`}
                className='h-[100%] w-[100%]'
							/>
						</div>

						<div className='flex flex-col order-1 flex-1'>
							<h1 className='text-right text-4xl font-bold'>{pokemon.name}</h1>
							<div className='info-pokemon'>
								<div className='flex flex-col gap-3'>
									<p className='font-bold text-lg mt-5'>Altura</p>
									<span>{pokemon.height}</span>
								</div>
								<div className='flex flex-col gap-3'>
									<p className='font-bold text-lg'>Peso</p>
									<span>{pokemon.weight}KG</span>
								</div>
							</div>
						</div>
					</div>

					<div className='flex gap-10 items-center '>
						<h1 className='text-2xl font-bold mr-5'>Estadísticas</h1>
						<div className='flex flex-col g-5 flex-1'>
							<div className='flex items-center g-5 mb-4 '>
								<span className='flex-[20%] font-semibold text-lg'>Hp</span>
								<progress id="file" max="100" value={pokemon.stats[0].base_stat} className='w-[100%] h-[30px] bg-green-600 rounded-xl mr-2'></progress>
								<span className='flex-[20%] font-semibold text-xl'>
									{pokemon.stats[0].base_stat}
								</span>
							</div>
							<div className='flex items-center g-5 mb-4'>
								<span className='flex-[20%] font-semibold text-lg'>Attack</span>
								<progress id="file" max="100" value={pokemon.stats[1].base_stat} className='w-[100%] h-[30px] bg-green-600 rounded-xl mr-2'></progress>
								<span className='flex-[20%] font-semibold text-xl'>
									{pokemon.stats[1].base_stat}
								</span>
							</div>
							<div className='flex items-center g-5 mb-4'>
								<span className='flex-[20%] font-semibold text-lg'>Defense</span>
								<progress id="file" max="100" value={pokemon.stats[2].base_stat} className='w-[100%] h-[30px] bg-green-600 rounded-xl mr-2'></progress>
								<span className='flex-[20%] font-semibold text-xl'>
									{pokemon.stats[2].base_stat}
								</span>
							</div>
							<div className='flex items-center g-5 mb-4'>
								<span className='flex-[20%] font-semibold text-lg'>Special Attack</span>
								<progress id="file" max="100" value={pokemon.stats[3].base_stat} className='w-[100%] h-[30px] bg-green-600 rounded-xl mr-2'></progress>
								<span className='flex-[20%] font-semibold text-xl'>
									{pokemon.stats[3].base_stat}
								</span>
							</div>
							<div className='flex items-center g-5 mb-4'>
								<span className='flex-[20%] font-semibold text-lg'>Special Defense</span>
								<progress id="file" max="100" value={pokemon.stats[4].base_stat} className='w-[100%] h-[30px] bg-green-600 rounded-xl mr-2'></progress>
								<span className='flex-[20%] font-semibold text-xl'>
									{pokemon.stats[4].base_stat}
								</span>
							</div>
							<div className='flex items-center g-5 mb-4'>
								<span className='flex-[20%] font-semibold text-lg'>Speed</span>
								<progress id="file" max="100" value={pokemon.stats[5].base_stat} className='w-[100%] h-[30px] bg-green-600 mr-2'></progress>
								<span className='flex-[20%] font-semibold text-xl'>
									{pokemon.stats[5].base_stat}
								</span>
							</div>
						</div>
					</div>
				</>
			)}
		</main>
    </>
  )
}

export default pokemonPage
