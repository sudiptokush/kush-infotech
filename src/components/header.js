import React from "react";
import { Link } from "gatsby"
import {imageProcessor} from "../hooks/image-processor-hook";
import headerStyles from './header.module.scss';
import {Navbar,Nav} from "react-bootstrap";


const Header = () => {
    const temp = imageProcessor("logo","fixed"); //{temp}
    return <Navbar expand="lg">
            <Navbar.Brand href="#home">Kush Infotech</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects/">Projects</Link>
                <Link to="/contactUs/">Contacts</Link>
              </Nav>
            </Navbar.Collapse>
            
          </Navbar>
    
}
export default Header;