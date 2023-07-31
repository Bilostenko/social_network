import React from "react";
import Post from "./post/Post";
import './myPosts.css'

const MyPosts = ({ postsData, dispatch }) => {

  let postsElements = postsData.map((post) => <Post message={post.post} like={post.like} />)

  let newsPostElement = React.createRef()
  let handleAddPost = () => {
    let message = newsPostElement.current.value
    let action = {type: "ADD-POST", message : message}
    dispatch(action)
    newsPostElement.current.value = ''
  }
  
  return (
    <div className="postBlock">
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newsPostElement}></textarea>
        </div>
        <div>
          <button onClick={handleAddPost}>Add post</button>
        </div>

      </div>
      <div className="posts">
        {postsElements}
      </div>

    </div>
  )
}


export default MyPosts