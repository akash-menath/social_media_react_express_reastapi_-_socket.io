import React from 'react'
import './profileCard.css';
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'


function ProfileCard() {
  const profilePge=true;
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

          <div className='vl'></div>

            <div className='follow'>
              <span>1</span>
              <span>followers</span>
            </div>
            {profilePge && (
              <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
              </>
            )}

        </div>
        <hr />
      </div>
      { profilePge ?"": <span>
        My Profile
      </span> }
     

    </div>
  )
}

export default ProfileCard
