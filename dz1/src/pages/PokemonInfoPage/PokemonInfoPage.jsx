import React, { useEffect, useState } from 'react'
import classes from "./pokemoninfopage.module.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo'

const PokemonInfoPage = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null)
  const { id } = useParams()
  // const [load, setLoad] = useState(true)

  const fetchPoke = async() => {
    let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    console.log(data);
    setPokemonInfo(data)
    console.log(pokemonInfo);
  }

  useEffect(() => {
    fetchPoke()
    console.log(pokemonInfo);
  }, [ id ])


  // fetchSinglePokemon(id).then(data => {
  //   setPokemonInfo(data)
  // })

  // useEffect(() => {
  //   console.log(pokemonInfo);
  // }, [pokemonInfo])

  return pokemonInfo != null ? 
    <div className={classes.mainBlock}>
        <img src={pokemonInfo.sprites.front_default} alt="" />
        <div>
            <span>{pokemonInfo.name.toUpperCase()}</span>
            <p>Weight: {pokemonInfo.weight}</p>
            <p>Height: {pokemonInfo.height}</p>
        </div>
    </div>
    :
    <p className={classes.load}>Load...</p>
}

export default PokemonInfoPage