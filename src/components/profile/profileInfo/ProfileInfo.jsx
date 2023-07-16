import React from "react";
import "./profileInfo.css"

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img className='bcgrnd_image' src={props.src} alt="image" />
      </div>
      <div className="descriptionBlock">
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo