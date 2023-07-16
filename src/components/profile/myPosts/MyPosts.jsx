import React from "react";
import Post from "./post/Post";
import './myPosts.css'

let postsData = [
  { id: 1, post: "Hi, how are you?", like: 10 },
  { id: 2, post: "It's my first message", like: 15 },
]

let postsElements = postsData.map((post) => <Post message={post.post} like={post.like} />)

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
        {postsElements}
      </div>

    </div>
  )
}


export default MyPosts