import React from "react";
import "./Resume.css";
import { Container, Grid, Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";


const Resume = () => {
  return (
    <>
      {/* ABOUT ME */}
      <Grid container className="section">
        <Grid item className="section_title" xs={12}>
          <span>

          </span>
          <Typography variant="h6" className="section_title_text">ABOUT ME</Typography>

        </Grid>
          <Grid item xs={12}>
            <Typography className="aboutme_text">
              {resumeData.About}
            </Typography>

          </Grid>


      </Grid>

      {/* Expereince and Education */}
      <Grid container className="section"></Grid>

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

export default Resume;
