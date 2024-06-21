import { Typography } from '@mui/material'
import React from 'react'
import CoustommTimeline from '../Timeline/Timeline'


import "./Profile.css";
import resumeData from "../../utils/resumeData.js";
import PersonIcon from '@mui/icons-material/Person';
    

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
      <Typography className='name'>   {resumeData.Name} </Typography>
      <Typography className= 'title'>  {resumeData.Title} </Typography>

      </div>
      
        <figure className='profile_image'>   
        
            <img src={require('../../assets/images/pfp.jpg')} alt=""/>
        </figure>

        <div className='profile_information'>
        <CoustommTimeline icon={<PersonIcon/>}/>
          
          <br/>
          
          <button>
            myButton
          </button>


        </div>
      
    </div>
  )
}

// 13/10
export default Profile