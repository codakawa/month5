import React from 'react'
import classes from "./postcard.module.css"
import { Link } from 'react-router-dom'
import { API, APIDelete } from '../api'

const PostCard = ({ name, id }) => {
  return (
    <div className={classes.postName}>
      <span>{id}. </span>
      <Link to={`/posts/${id}`} className={classes.link}>{name}</Link>
      <Link to={`/delete/${id}`}><button>DELETE</button></Link>
      
    </div>
  )
}

export default PostCard