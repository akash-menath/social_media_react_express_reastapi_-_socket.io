import React from 'react'
import './profileCard.css';
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'


function ProfileCard() {
  return (
    <div className='ProfileCard'>
      <div className='ProfileImages'>
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className='ProfileName'>
        <span>akash</span>
        <span>jjunier ui ux designer</span>
      </div>

      <div className='followStatus'>
        <hr />
        <div>
          <div className='follow'>
            <span>6,879</span>
            <span>followings</span>
          </div>
          <div className='vl'>
            <div className='follow'>
              <span>1</span>
              <span>followers</span>
            </div>

          </div>
        </div>
        <hr/>
      </div>
      
    </div>
  )
}

export default ProfileCard
