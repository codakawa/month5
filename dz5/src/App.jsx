import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts } from './store/postsReducer'
import { changeCommentsDispatch, fetchComments } from './store/commentsReducer'

function App() {
  const posts = useSelector(state => state.posts.posts)
  const comments = useSelector(state => state.comments.currentComments)
  const dispatch = useDispatch()

  const [openedPost, setOpenedPost] = useState(null)

  const getComment = (clickedPost) => {
    console.log(clickedPost, "clicked");
    console.log(openedPost);
    if(clickedPost === openedPost) {
      setOpenedPost(null)
      dispatch(changeCommentsDispatch(null))
    } else {
      setOpenedPost(clickedPost)
      dispatch(fetchComments(`https://jsonplaceholder.typicode.com/posts/${clickedPost}/comments`))
    }
  }

  useEffect(() => {
    dispatch(fetchPosts("https://jsonplaceholder.typicode.com/posts/"))
  }, [  ])

  return (
    <div className='wrapper'>
      <div className='postsBlock'>
        <ul>
          {posts != null ? 
          posts.map(post => <li key={post.id} onClick={() => getComment(post.id)} className="post">
            {post.title}
          </li>) 
          : 
          <li>Loading...</li>
          }
        </ul>
      </div>

      <div>
        <div className='commentsBlock'>
          <ul>
            {comments != null ? 
            comments.map(comment => <li key={comment.id} className="commentsLi">
              <span className='email'>{comment.email}</span>
              <span className='commentBody'>{comment.body}</span>
            </li>) 
            :
            <li>Choose post</li>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
