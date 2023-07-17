import React from 'react';
import MyPosts from './myPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';
import "./profile.css"



const Profile = ({postsData}) => {
  return (
    <div>
      <ProfileInfo src = "https://media.istockphoto.com/id/1460655983/photo/a-ocean-waves-and-beach-top-view-natural-background.webp?b=1&s=170667a&w=0&k=20&c=SQW8xiYa4QH9d7s1R02u9wSrM6C7vjWCTcFzVEyZjaM="/>
      <MyPosts postsData={postsData}/>
    </div>
  )
}



export default Profile