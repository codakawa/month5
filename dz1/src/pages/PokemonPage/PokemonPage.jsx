import React, { useState } from 'react'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import axios from 'axios'

const fetchPoke = async() => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    return data;

}

const PokemonPage = () => {
    const [pokemonList, setPokemonList] = useState([])
    fetchPoke().then(data => setPokemonList(data.results))

    return (
        <div>
            {pokemonList.map((pokemon) => <PokemonCard name={pokemon.name} key={pokemon.name}/>)}
        </div>
    )
}

export default PokemonPage