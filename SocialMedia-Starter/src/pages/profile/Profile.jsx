import React from 'react'
import ProfileCard from '../../components/profileCard/ProfileCard'
import PostSide from '../../components/postSide/PostSide'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import './Profile.css'

function Profile() {
  return (
  <div className="Profile">
    <ProfileLeft/>
    <div className="profileCenter">
      <ProfileCard location="profilePage"/>
      <PostSide/>
    </div>
    <RightSide/>
  </div>
  )
}

export default Profile
