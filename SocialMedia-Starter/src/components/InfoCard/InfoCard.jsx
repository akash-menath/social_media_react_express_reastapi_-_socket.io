import React,{useState} from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModel from '../ProfileModel/ProfileModel'

function InfoCard() {
const [modelOpened,setModelOpened]=useState(false)

  return (
   <div className="InfoCard">
    <div className="infoHead">
        <h4>Your Info</h4>

        <div>
        <UilPen width='2rem' hight='1.2rem' onClick={()=>{setModelOpened(true)}} />
        <ProfileModel modelOpened={modelOpened} setModelOpened={setModelOpened}/>
        </div>
    </div>
    <div className="info">
        <span><b>Status </b></span>
        <span> In relationship</span>
    </div>

    <div className="info">
        <span><b>Lives </b></span>
        <span> Calicut </span>
    </div>
    <div className="info">
        <span><b>Work at </b></span>
        <span> Broto Type </span>
    </div>
    <button className="button logout-button">Logout</button>
   </div>
  )
}

export default InfoCard
