import React, { Children } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';

import './Timeline.css'
import { Typography } from '@mui/material';

const Timelinee = ({title, item, children, icon}) => {
  return (
    

    
    <Timeline className={'Timeline'}>
{/* Timeline Header */}
    <TimelineItem className={'Timeline_FirstItem'}>
      <TimelineSeparator>
        <TimelineDot className={'Timeline_dot_header'}> {<WorkIcon/>}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent> 
         <Typography variant='h6' className='Timeline_header'>{title}</Typography> 
      </TimelineContent>
    </TimelineItem>


    {children}

{/* Remaining Items */}
    <TimelineItem>
      <CoustommTimelineSeparator/>      {/* calling the function separator */}

      <TimelineContent>{title}</TimelineContent>
    </TimelineItem>

    <TimelineItem>
     <CoustommTimelineSeparator/>      {/* calling the function separator */}


     <TimelineContent>{item}</TimelineContent>
    </TimelineItem>
  </Timeline>
  
  )
}


export const CoustommTimelineSeparator = () =>(
    <TimelineSeparator className='Separator_padding'>
        <TimelineDot className={'Timeline_dot'}/>
        <TimelineConnector />
      </TimelineSeparator>
    
);


export default Timelinee

