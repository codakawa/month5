import React from 'react'
import classes from "./postcard.module.css"
import { Link } from 'react-router-dom'
import { API, APIDelete } from '../api'

const PostCard = ({ name, id }) => {
  return (
    <div className={classes.postName}>
      <span>{id}. </span>
      <Link to={`/posts/${id}`} className={classes.link}>{name}</Link>
      <button onClick={() => APIDelete(`posts/${id}`).then(status => alert(status))}>DELETE</button>
    </div>
  )
}

export default PostCard