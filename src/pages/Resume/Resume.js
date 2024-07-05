import React from "react";
import "./Resume.css";
import { Container, Grid, Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";


const Resume = () => {
  return (
    <>
      {/* ABOUT ME */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30" xs={12}>
          <span>

          </span>
          <h6 variant="h6" className="section_title_text">ABOUT ME</h6>

        </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" className="aboutme_text">
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
