import React from 'react';
import "./friendsPhoto.css"

const FriendsPhoto = ({friendsPhoto}) => {
  let PhotoElements = friendsPhoto.map((photo) => <img className="frineds__photo" src={photo.photo} alt="avatar" />)


  return (
    <div className="friends-photo__block">
      {PhotoElements}
    </div>
  )
}

export default FriendsPhoto;