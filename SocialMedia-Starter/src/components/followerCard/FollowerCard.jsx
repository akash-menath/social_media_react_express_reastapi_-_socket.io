import React from 'react'
import './FollowerCard.css'
import { Followers } from '../../Data/FollowersData'

function FollowerCard() {
  return (
    <div className='followerCard'>
      <h3>who is folloeing you</h3>
      {Followers.map((follower, id) => {
        return (
          <div className='follower'>
            <div>
              <img src={follower.img} alt="" className='followerImg' />
               <div className='name'>
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className='button fc-button' >follow</button>
          </div>
        )

      })}
    </div>
  )
}

export default FollowerCard
