import React from "react";
import "./friends.css"

import FriendsPhoto from "./friendsPhoto/FriendsPhoto";
import FriendsInfo from "./friendsInfo/FriendsInfo";

const Friends = () =>{
  return(
    <div className="friends">
      <FriendsPhoto />
      <FriendsInfo/>
    </div>
  )
}

export default Friends