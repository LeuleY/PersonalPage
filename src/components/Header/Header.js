import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, Nav, Navbar, NavDropDown,} from "react-bootstrap";
import {Link,NavLink, withRouter, useNavigate, useLocation, useParams} from "react-router-dom";
import HomeRounded from '@mui/icons-material/HomeRounded';
import SchoolRounded from '@mui/icons-material/SchoolRounded';
import WorkRounded from '@mui/icons-material/WorkRounded';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Telegram from '@mui/icons-material/Telegram';

const Header = () => {
  return (
    <Navbar expand = "lg" sticky = "top" className='header'>
      <Nav.Link as ={NavLink} to = '/' >
      <Navbar.Brand className='header_home'>
        <HomeRounded />

      </Navbar.Brand>
      
      </Nav.Link>

    </Navbar>
  )
}

export default Header