import React from "react";
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
      <div>
        <div className="post__item">
          <img className="post__item-avatar" src="https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_neytiri_16x9_1098_01_0e7d844a.jpeg?region=240%2C0%2C1440%2C1080" alt="avatar" />
          post1</div>
        <div>post2</div>
      </div>
    </div>
  )
}


export default MyPosts