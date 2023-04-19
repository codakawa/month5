import React from 'react'
import classes from "./pokemonCard.module.css"
import { Link } from 'react-router-dom'

const PokemonCard = ({ name}) => {
  return (
    <div className={classes.pokemonName}>
        <Link to={`/pokemon/${name}`} className={classes.link}>{name}</Link>
    </div>
  )
}

export default PokemonCard