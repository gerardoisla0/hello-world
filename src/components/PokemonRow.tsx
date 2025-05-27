import type { Pokemon } from '../entities/pokemon.entity';

interface Props {
    pokemon: Pokemon;
}

export const PokemonRow = ({pokemon}:Props) => {

    const getId = (urlPokemon: string):string => {
        //const urlPokemon = "https://pokeapi.co/api/v2/pokemon/1/";
        return urlPokemon.split('/').slice(-2,-1)[0];
    }

    const getPhoto = (urlPokemon: string): string => {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(urlPokemon)}.png`;
    }

  return (
    <tr>
        <th>{getId(pokemon.url)}</th>
        <th>{pokemon.name}</th>
        <th><img src= {getPhoto(pokemon.url)} /></th>
    </tr>
  )
}