import React from "react";
import "./friends.css"

import FriendsPhoto from "./friendsPhoto/FriendsPhoto";
import FriendsInfo from "./friendsInfo/FriendsInfo";

const Friends = ({friendsData}) =>{
  return(
    <div className="friends">
      <FriendsPhoto friendsPhoto ={friendsData.friendsPhoto}/>
      <FriendsInfo/>
    </div>
  )
}

export default Friends