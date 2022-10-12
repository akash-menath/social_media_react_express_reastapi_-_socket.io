import React from 'react'
import FollowerCard from '../followerCard/FollowerCard'
import LogoSerch from '../logoSearch/LogoSerch'
import ProfileCard from '../profileCard/ProfileCard'
import './ProfileSide.css'

function ProfileSide() {
  return (
    <div className='profileSide'>
        <LogoSerch/>
        <ProfileCard/>
        <FollowerCard/>
      
    </div>
  )
}

export default ProfileSide
