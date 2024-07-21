import React from "react";
import { Container, Grid } from "@mui/material";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

import "./App.css";

function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={10}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>

        <Grid item xs style={{ backgroundColor: "" }}>
          <Router>
            <Header />
            <div className="main-content container_shadow">
              <Routes>
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/" element={<Resume />} />
              </Routes>
            </div>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
