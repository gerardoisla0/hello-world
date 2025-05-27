import axios from 'axios';
import { useEffect, useRef, useState } from 'react'
import type { Pokemon, PokemonAPI } from '../entities/pokemon.entity';

export const usePokemon = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const currentPage = useRef(1);

    const getPokemons = async (page: number) => {
        const {data} = await axios.get<PokemonAPI>('https://pokeapi.co/api/v2/pokemon',{
                params: {
                    offset: (page - 1) * 10,
                    limit: 10
                }
            }
        );
        setPokemons(data.results);
    }

    useEffect(() => {
        getPokemons(currentPage.current);
    },[]);

    const nextPage = () => {
        currentPage.current++;
        getPokemons(currentPage.current);
    }

    const prevPage = () => {
        if(currentPage.current < 2) return;
        currentPage.current--;
        getPokemons(currentPage.current);
    }

  return {
    /*variables*/
    pokemons,
    /*metodos*/
    nextPage,
    prevPage
  }
}
