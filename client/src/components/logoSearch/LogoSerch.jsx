import React from 'react'
import './LogoSearch.css'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './LogoSearch.css';

function LogoSerch() {
  return (

    <div className='Logosearch'>
         <img src={Logo} alt=""></img>
         <div className='Search'>
         <input type="text" placeholder='#Explore'/>
                <div className='s-icon'>
                <UilSearch/>
                </div>
         </div>
    </div>

  )
}

export default LogoSerch
