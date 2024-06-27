import { Typography } from '@mui/material'
import React from 'react'
import CoustommTimeline, {CoustommTimelineSeparator} from '../Timeline/Timeline'
import "./Profile.css";
import resumeData from "../../utils/resumeData.js";
import PersonIcon from '@mui/icons-material/Person';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
    

const CoustommTimelineItem = ({title, text , link }) => (
  <TimelineItem>
      <CoustommTimelineSeparator/>
      <TimelineContent>
      {link ?(<Typography>
        <span>{title}:</span> <a href={link} target='blank'></a>
      </Typography>) : (
        <Typography><span>{title}:</span>{text}</Typography>
      )}
      </TimelineContent>
  
</TimelineItem>
)

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
        <CoustommTimeline icon={<PersonIcon/>} >
        <CoustommTimelineItem title='Name' text={resumeData.Name}               />
        <CoustommTimelineItem title='Postion' text={resumeData.Title}               />
        <CoustommTimelineItem title='Email' text={resumeData.Email}               />

        </CoustommTimeline>
          
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