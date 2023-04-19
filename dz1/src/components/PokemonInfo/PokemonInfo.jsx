import React from 'react'

const PokemonInfo = ({ data }) => {
    return (
        <div>
            <img src={data.sprites.front_default} alt="" />
            <div>
                <span>{data.name}</span>
                <p>height</p>
            </div>
        </div>
      )  
}

export default PokemonInfo