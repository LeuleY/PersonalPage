import React from "react";
import { Container, Grid } from "@mui/material";
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import Switch from '@mui/material/Switch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// import { Switch } from '@mui/material';



import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";



import "./App.css";

function App() {
  return (
    <Container>
      <Grid container>

        <Grid item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          
        >
          <Profile />
        </Grid>

        <Grid item xs style={{ backgroundColor: "red" }}>
          <Header />

          <Router>
            <Routes>

              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/" element={<Resume />} />

            </Routes>
          </Router>

          <Footer />
        </Grid>
        
      </Grid>
    </Container>
  );
}

export default App;
