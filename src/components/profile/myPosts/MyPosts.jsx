import React from "react";
import Post from "./post/Post";
import './myPosts.css'

const MyPosts = () => {
  return (
    <div>
      <div>ava + description</div>
      <div>My posts</div>
      <div>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <button>Add post</button>
      </div>
      <div className="posts">
        <Post message="Hi, how are you?" like="10"/>
        <Post message="It's my first message" like="15"/>
      </div>

    </div>
  )
}


export default MyPosts