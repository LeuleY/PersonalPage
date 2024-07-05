import { Typography } from '@mui/material'
import React from 'react'
import './Footer.css'
import resumeData from '../../utils/resumeData'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_left'>
          <Typography className='footer_name'>
            {resumeData.Name}
           </Typography>
           

        </div>

        <div className='footer_right'>
          <Typography className='footer_copyright'>
            Design and Develop by Leule Yonas 
            <br/>

            Clone idea from{" "}
            <a href='https://themeforest.net/user/tavonline/portfolio' target='blank'>TravonLine</a>
            <br/>

            Tutorial by  {" "}
            <a href='https://www.youtube.com/@SalmanFazal01' target='blank'>SalmanFazalYT</a>
          </Typography>

        </div>
    </div>
  )
}

export default Footer