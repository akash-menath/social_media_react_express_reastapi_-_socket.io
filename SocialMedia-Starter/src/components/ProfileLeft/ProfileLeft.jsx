import React from 'react'
import FollowerCard from '../followerCard/FollowerCard'
import InfoCard from '../InfoCard/InfoCard'
import LogoSerch from '../logoSearch/LogoSerch'


function ProfileLeft() {
  return (
   <div className="profileSide">
    <LogoSerch/>
    <InfoCard/>
    <FollowerCard/>
   </div>
  )
}

export default ProfileLeft
