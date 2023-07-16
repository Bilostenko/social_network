import React from "react";
import Post from "./post/Post";
import './myPosts.css'

let postsData = [
  {id: 1, post: "Hi, how are you?", like: 10},
  {id: 2, post: "It's my first message", like: 15},
]

const MyPosts = () => {
  return (
    <div className="postBlock">
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>

      </div>
      <div className="posts">
        <Post message={postsData[0].post} like={postsData[0].like} />
        <Post message={postsData[1].post} like={postsData[1].like} />
      </div>

    </div>
  )
}


export default MyPosts