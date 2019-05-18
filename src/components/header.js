import React from "react";
import { Link } from "gatsby"
import {imageProcessor} from "../hooks/image-processor-hook";
import headerStyles from './header.module.scss';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

const Header = () => {
    const temp = imageProcessor("logo","fixed");
    return <Navbar expand="lg" className="navi">
            <Navbar.Brand href="#home">{temp}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/about">About</Link></Nav.Link>
                <Nav.Link><Link to="/projects/">Projects</Link></Nav.Link>
                <Nav.Link><Link to="/contactUs/">Contacts</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
    
}
export default Header;


{/* <div className= {headerStyles.headerContainer}>
        <div className={headerStyles.brandLogo}>
          <Link to="/">
            {temp}
          </Link> 
          
        </div>
        <div className={headerStyles.menuBar}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects/">Projects</Link>
            <Link to="/contactUs/">Contacts</Link>
        </div>
    </div> */}