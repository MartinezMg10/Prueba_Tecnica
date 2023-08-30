import { useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContext"
import { useForm } from "../hook/useForm";

export const PokemonProvider = ({children}) => {

    const { valueSearch, onInputChange, onResetForm } = useForm({
        valueSearch: "",
      });

const [globalPokemons,setGlobalPokemons] = useState([])
const [allPokemons,setAllPokemons] = useState([])
const [offset,setOffset] = useState(0)

const [loading,setLoading] = useState(true)
const [active,setActive] = useState(false)



const obtenerPokemons = async (limit=20)=>{
        const baseURL = 'https://pokeapi.co/api/v2/';

        const res = await fetch(
            `${baseURL}pokemon?limit=${limit}&offset=${offset}`
        );
        const data = await res.json();

        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url)
            const data =await res.json();
            return data
        })
        const results = await Promise.all(promises)
        setAllPokemons([ ...allPokemons,...results ])
        setLoading(false)
}

    const getGlobalPokemons = async () => {
    const baseURL = 'https://pokeapi.co/api/v2/';

    const res = await fetch(
        `${baseURL}pokemon?limit=500&offset=0.`
    );
    const data = await res.json();

    const promises = data.results.map(async pokemon => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
    });
    const results = await Promise.all(promises);

    setGlobalPokemons(results);
    setLoading(false)
};

const llamarPokemonId = async (id) =>  {
    const baseURL = 'https://pokeapi.co/api/v2/';

    const res = await fetch(`${baseURL}pokemon/${id}` );
    const data = await res.json();
    return data
}

useEffect(() =>{
    obtenerPokemons();
},[offset])

useEffect(() =>{
    getGlobalPokemons();
},[])

const onClickLoadMore = () => {
    setOffset(offset + 20);
  };

    return (
        <PokemonContext.Provider value={{
           allPokemons,
           globalPokemons,
            llamarPokemonId,
            valueSearch,
            onInputChange,
            onResetForm,
            onClickLoadMore
        }}>
            {children}
        </PokemonContext.Provider>
    )
}