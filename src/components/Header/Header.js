import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
} from "react-bootstrap";
import {
  NavLink,
} from "react-router-dom";
import HomeRounded from "@mui/icons-material/HomeRounded";
import Telegram from "@mui/icons-material/Telegram";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import './Header.css'

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            RESUME
          </Nav.Link>

          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            PORTFOLIO
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.Socials).map((key) => (
            <a
              key={key}  // Add a unique key for each element in a list
              href={resumeData.Socials[key].link}
              target="_blank"
              rel="noopener noreferrer"  // Add this attribute
            >
              {resumeData.Socials[key].icon}
            </a>
          ))}

          <CustomButton text={"Hire Me"} icon={<Telegram/>} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
