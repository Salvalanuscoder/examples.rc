import {useState, useEffect} from 'react'
import React from 'react';

const PokeCard = ({pokemonUrl}) =>{
    const[pokemon, setPokemon] = useState(null)

    useEffect(() => {
        
            fetch(pokemonUrl)
                .then((resp) => resp.json())
                .then((data) => {
                    setPokemon(data)
                })
    }, [])

  return (
    <div className='col-3 m-2 poke-card'>

    {
        //operador logico && AND
    pokemon && pokemon.sprites && 
        <div>
            <h4>{pokemon.name}</h4>
            {console.log("Sprites:", pokemon.sprites)}
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    }
    
    </div>

  )
}

export default PokeCard