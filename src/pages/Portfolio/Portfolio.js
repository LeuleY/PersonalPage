import React, { useState } from "react";
import "./Portfolio.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Dialog,
  DialogTitle,
  Tab,
  Tabs,
  Typography,
  Grow,
  DialogContent,
  DialogActions,
} from "@mui/material";
import resumeData from "../../utils/resumeData";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container spacing={1} className="section pb_45 pt_45">
      {/* TITLE */}
      <Grid item className="section_title mb_20" xs={12}>
        <span></span>
        <h6 variant="h6" className="section_title_text">
          Portfolio
        </h6>
      </Grid>

      {/* Tabs */}
      <Grid item>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="customTabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          />

          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                key={tag}  // Add key for each Tab
                label={tag}
                value={tag}
                className={
                  tabValue === tag ? "customTabs_item active" : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.projects.map((project) => (
            <React.Fragment key={project.title}> {/* Use React.Fragment with key */}
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.images}
                          title={project.title}
                        />

                        <CardContent>
                          <Typography
                            variant={"body2"}
                            className="customCard_title"
                          >
                            {project.title}
                          </Typography>

                          <Typography
                            variant="caption"
                            className="customCard_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </React.Fragment>
          ))}
        </Grid>
      </Grid>

      <Dialog
        open={Boolean(projectDialog)}
        onClose={() => setProjectDialog(false)}
        className="projectDialog"
        maxWidth={'md'}
        fullWidth
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>

        <DialogContent style={{ height: "80vh"}}>
          {projectDialog.images && (
            <ImageGallery images={projectDialog.images}/>
          )}

          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a
              key={link.link}  // Add a unique key for each link
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"  // Add this attribute
              className="projectDialog_icon"
            >
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
