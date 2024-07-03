import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import {
  Link,
  NavLink,
  withRouter,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";
import HomeRounded from "@mui/icons-material/HomeRounded";
import SchoolRounded from "@mui/icons-material/SchoolRounded";
import WorkRounded from "@mui/icons-material/WorkRounded";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Telegram from "@mui/icons-material/Telegram";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import './Header.css'


const Header = (props) => {
  const location = useLocation();

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
          {/* may be a capital P */}
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
            {Object.keys(resumeData.Socials).map((key) =>(
              <a href={resumeData.Socials[key].link} target="_blank">
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
