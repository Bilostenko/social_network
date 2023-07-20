import React from "react";
import "./friends.css";

const Friends = ({ friendsInfo }) => {
  let friendElements = friendsInfo.friendsPhoto.map((photo, index) => {
    const friend = friendsInfo.friendsData.find((friend) => friend.id === photo.id);

    return (
      <div key={photo.id} className="friend__block">
        <img className="friend__photo" src={photo.photo} alt="avatar" />
        <span className="friend__name">{friend.name}</span>
      </div>
    );
  });

  return (
    <div>
      <div className="friends__header">Friends</div>
      <div className="friends__block">{friendElements}</div>
    </div>
  );
};

export default Friends;
