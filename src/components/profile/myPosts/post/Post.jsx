import React from "react";
import "./post.css"

const Post = (props) => {
  return (
    <div className="post__item">
      <img className="post__item-avatar" src="https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_neytiri_16x9_1098_01_0e7d844a.jpeg?region=240%2C0%2C1440%2C1080" alt="avatar" />
      {props.message}
      <div>
        <span>like:{props.like}</span>
      </div>
    </div>
  )
}

export default Post