import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../postShare/PostShare'
import './PostSide.css'

function PostSide() {
  return (
   <div className="Postside">
    <PostShare/>
    <Posts/>
   </div>
  )
}

export default PostSide
