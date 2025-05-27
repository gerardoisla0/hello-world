import { PokemonRow } from './PokemonRow';
import { usePokemon } from '../hook/usePokemon';

export const PokemonPage = () => {

  const {pokemons, prevPage, nextPage} = usePokemon();

  return (
    <>
        <h3>Lista de Pokemon</h3>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Foto</th>
                </tr>
            </thead>
            <tbody>
                    {pokemons.map(item => 
                        (
                            <PokemonRow pokemon={item} />
                        )
                    )}
                    {
                        pokemons.length == 0 && (
                            <tr>
                                <th colSpan={3}>No tienes pokemons</th>
                            </tr>
                        )
                    }
            </tbody>
        </table>
        <div>
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
        </div>
    </>
  )
}
