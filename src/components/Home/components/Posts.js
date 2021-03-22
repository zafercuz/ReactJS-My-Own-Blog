import React from 'react'
import Post from './Post'

const Posts = (props) => {
  return (
    <div className="row mt-5">
      {[...props.posts].reverse().map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Posts
