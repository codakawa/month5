import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { APIDelete, API } from '../../components/api'

const DeletePost = () => {
    const { id } = useParams()
    const [ post, setPost ] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        API(`posts/${id}`).then(data => setPost(data.body))
    }, [  ])
  return (
    <div>
        <span>Вы уверены что хотитет удалить данный пост?</span>
        <div>{post}</div>
        <button onClick={() => APIDelete(`posts/${id}`).then((status) => {
            if(status === 200) {
                alert("Успешно!")
            } else {
                alert("Error" + status)
            }
            navigate("/posts")
        })}>ДА</button>
        <button onClick={() => navigate("/posts")}>НЕТ</button>
    </div>
  )
}

export default DeletePost