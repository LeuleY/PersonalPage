import {  Typography } from "@mui/material";
import React from "react";
import CustomTimeline, {CustomTimelineSeparator,} from "../Timeline/Timeline";
import "./Profile.css";
import resumeData from "../../utils/resumeData.js";
import PersonIcon from "@mui/icons-material/Person";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import CustomButton from '../Button/Button'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name"> {resumeData.Name} </Typography>
        <Typography className="title"> {resumeData.Title} </Typography>
      </div>

      <figure className="profile_image">
        <img src={require("../../assets/images/pfp.jpg")} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.Name} />
          <CustomTimelineItem title="Postion" text={resumeData.Title} />
          <CustomTimelineItem title="Email" text={resumeData.Email} />

          {Object.keys(resumeData.Socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.Socials[key].text}
              link={resumeData.Socials[key].link}
            />
          ))}
        </CustomTimeline>
            <div className="button_container">
            <CustomButton className="download_text" text={"Download CV"} icon={<CloudDownloadIcon/>}/>

            </div>
        </div>
    </div>
  );
};

export default Profile;
