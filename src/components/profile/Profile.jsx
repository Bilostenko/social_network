import React from 'react';
import MyPosts from './myPosts/MyPosts';
import "./profile.css"

const Profile = () => {
  return (
    <div>
      <div>
        <img className='bcgrnd_image' src="https://media.istockphoto.com/id/1460655983/photo/a-ocean-waves-and-beach-top-view-natural-background.webp?b=1&s=170667a&w=0&k=20&c=SQW8xiYa4QH9d7s1R02u9wSrM6C7vjWCTcFzVEyZjaM=" alt="image" />
      </div>
      <MyPosts />
    </div>
  )
}



export default Profile