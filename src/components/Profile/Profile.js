import { Typography } from '@mui/material'
import React from 'react'


import "./Profile.css";


const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
      <Typography classsName='name'>   Leule Yonas </Typography>
      <Typography className= 'title'>  Software Engineer  </Typography>

      </div>
      
        <figure className='profile_image'>   
        
            <img src={require('../../assets/images/pfp.jpg')} alt=""/>
        </figure>

        <div className='profile_information'>
          Timeline
          <br/>
          
          <button>
            myButton
          </button>


        </div>
      
    </div>
  )
}

export default Profile