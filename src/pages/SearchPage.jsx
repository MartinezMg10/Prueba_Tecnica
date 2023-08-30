import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import Tarjeta from '../components/Tarjeta';

export const SearchPage = () => {
	const location = useLocation();

	const { globalPokemons } = useContext(PokemonContext);

	const filteredPokemons = globalPokemons.filter(pokemon =>
		pokemon.name.includes(location.state.toLowerCase())
	);

	console.log(globalPokemons)
	return (
		<div className='w-[100] flex flex-col justify-center items-center  mt-5'>
			<p className='mb-[30px] text-xl'>
				Se encontraron <span>{filteredPokemons.length}</span>{' '}
				resultados:
			</p>
			<div className='flex flex-wrap gap-5 justify-center items-center  my-5 w-[100] m-auto'>
				{filteredPokemons.map(pokemon => (
					<Tarjeta pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
	);
};
