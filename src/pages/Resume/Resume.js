import React from "react";
import "./Resume.css";
import { Grid, Paper, Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import WorkIcon from "@mui/icons-material/Work";
import TimelineItem from "@mui/lab/TimelineItem";

import TimelineDot from "@mui/lab/TimelineDot";
import TimelineContent from "@mui/lab/TimelineContent";
import SchoolIcon from "@mui/icons-material/School";

const Resume = () => {
  return (
    <>
      {/* ABOUT ME */}
      <Grid container className="section pb_45 pt_45">
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
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30" xs={12}>
          <span></span>
          <h6 variant="h6" className="section_title_text">
            RESUME
          </h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* Experinces */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                {resumeData.Experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />

                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.Title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.Date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.Description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumeData.Education.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />

                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {education.School}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.Date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {education.Degree}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>{" "}
          </Grid>
        </Grid>
      </Grid>

 
      {/*  Skills */}

      <Grid
        container
        className="section graybg pb_45 p_50"
      >
        <Grid item xs={12}>
                <Grid container justify = "space-between"  spacing={3} className="skill_container">
                <Grid item className="section_title mb_30" xs={12}>
          <span></span>
          <h6 variant="h6" className="section_title_text">
            My Skills
          </h6>
        </Grid>


        {resumeData.Skills.map((Skill) => (
          <Grid item xs={12} small={6} md={3}>
            <Paper elevation={0} className="skill">
              <Typography variant="h6" className="skill_title">
              {Skill.title}

              </Typography>

              {Skill.description.map((Element) => (
                <Typography variant="body2" className="skill_description">
                  <TimelineDot variant={"outlined"} className="timeline_dot"/>
                   
                  {Element}
                </Typography>
              ))}
            

            </Paper>
          </Grid>
        ))}

                </Grid>

        </Grid>


      

       

        
      </Grid>

      {/* Contact */}

      <Grid container className="section"></Grid>
    </>
    //
  );
};

// 11;11

export default Resume;
