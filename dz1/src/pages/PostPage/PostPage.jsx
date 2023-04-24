import React, { useEffect, useState } from 'react'
import PostCard from '../../components/PostCard/PostCard'
import axios from 'axios'
import { API } from '../../components/api'

// const fetchPoke = async() => {
//     const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
//     return data;
// }

const PostPage = () => {
    const [postsList, setPostsList] = useState([])
    
    useEffect(() => {
        API("posts").then(data => setPostsList(data))
    }, [  ])
    
    return (
        <div>
            {postsList.map((post) => <PostCard name={post.title} id={post.id} key={post.id}/>)}
        </div>
    )
}

export default PostPage