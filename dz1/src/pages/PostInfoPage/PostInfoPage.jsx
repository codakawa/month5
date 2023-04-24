import React, { useEffect, useState } from 'react'
import classes from "./postinfopage.module.css"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import {API} from '../../components/api'

const PostInfoPage = () => {
  const [postInfo, setPostInfo] = useState(null)
  const { id } = useParams()
  // const [load, setLoad] = useState(true)
  // const [mess, setMess] = useState("")
  // const fetchPoke = async() => {
  //   let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //   .catch((error) => {
  //     setMess(error.message)
  //   })
  //   console.log(data);
  //   setPokemonInfo(data)
  //   console.log(pokemonInfo);      
  // }

  const navigate  = useNavigate()
  const back = () => {
    navigate(-1)
  }
  
  useEffect(() => {
    API(`posts/${id}`).then(data => setPostInfo(data))
    console.log(postInfo);
  }, [ id ])


  // fetchSinglePokemon(id).then(data => {
  //   setPokemonInfo(data)
  // })

  // useEffect(() => {
  //   console.log(pokemonInfo);
  // }, [pokemonInfo])

  return postInfo != null ? 
  <>
    <div className={classes.mainBlock}>
        <span>{postInfo.id}</span>
        <div>{postInfo.body}</div>
        <button onClick={back}>BACK</button>
    </div>
  </>
    :
    <p className={classes.load}>Loading...</p>
}

export default PostInfoPage