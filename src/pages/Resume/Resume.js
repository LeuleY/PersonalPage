import React from "react";
import "./Resume.css";
import { Container, Grid, Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@mui/icons-material/Work";
import TimelineItem from "@mui/lab/TimelineItem";import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from "@mui/lab/TimelineContent";

const Resume = () => {
  return (
    <>
      {/* ABOUT ME */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30" xs={12}>
          <span></span>
          <h6 variant="h6" className="section_title_text">
            ABOUT ME
          </h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.About}
          </Typography>
        </Grid>
      </Grid>

      {/* Expereince and Education */}
      <Grid container className="section">
        <Grid item className="section_title mb_30" xs={12}>
          <span></span>
          <h6 variant="h6" className="section_title_text">
            RESUME
          </h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            {/* Experinces */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                {resumeData.Experiences.map((experience) => (
                  <TimelineItem>
                    <TimelineSeparator className="Separator_padding">
                      <TimelineDot
                        variant={"outlined"}
                        className={"Timeline_dot"}
                      />
                      <TimelineConnector />
                    </TimelineSeparator>

                <TimelineContent>
                  <Typography>
                    {experience.Title}
                  </Typography>
                  <Typography>
                    {experience.Date}
                  </Typography>
                  <Typography>
                    {experience.Description}
                  </Typography>
                </TimelineContent>

                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* Education */}
            <Grid item sm={12} md={6}></Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services  */}

      <Grid container className="section"></Grid>

      {/*  Skills */}

      <Grid container className="section"></Grid>

      {/* Contact */}

      <Grid container className="section"></Grid>
    </>
    //
  );
};


// 11;11

export default Resume;
