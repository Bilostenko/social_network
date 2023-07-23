import React from "react";
import Post from "./post/Post";
import './myPosts.css'


const MyPosts = ({postsData}) => {

  let postsElements = postsData.map((post) => <Post message={post.post} like={post.like} />)

  let newsPostElement = React.createRef()
  let addPost = () => {
    alert(newsPostElement.current.value)
  }

  return (
    <div className="postBlock">
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newsPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>

      </div>
      <div className="posts">
        {postsElements}
      </div>

    </div>
  )
}


export default MyPosts