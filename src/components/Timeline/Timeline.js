import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
// import WorkIcon from '@mui/icons-material/Work';

import './Timeline.css'


import { Typography } from '@mui/material';

const Timelinee = ({title,children, icon}) => {
  return (
    

    
    <Timeline className={'Timeline'}>
{/* Timeline Header */}
    <TimelineItem className={'Timeline_FirstItem'}>
      <TimelineSeparator>
        <TimelineDot className={'Timeline_dot_header'}> {icon}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent> 
         <Typography variant='h6' className='Timeline_header'>{title}</Typography> 
      </TimelineContent>
    </TimelineItem>


    {children}

  
  </Timeline>
  
  )
}


export const CustomTimelineSeparator = () =>(
    <TimelineSeparator className='Separator_padding'>
        <TimelineDot variant={"outlined"} className={'Timeline_dot'}/>
        <TimelineConnector />
      </TimelineSeparator>
    
);


export default Timelinee



// 

