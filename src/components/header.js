import React from "react";
import { Link } from "gatsby"
import {imageProcessor} from "../hooks/image-processor-hook";
import headerStyles from './header.module.scss';

const Header = () => {
    const temp = imageProcessor("logo","fixed");
    return <div className= {headerStyles.headerContainer}>
        <div className={headerStyles.brandLogo}>
          <Link to="/">
            {temp}
          </Link> 
          
        </div>
        <div className={headerStyles.menuBar}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects/">Projects</Link>
            <Link to="/contactUs/">Contact Us</Link>
        </div>
        {/* <div className={headerStyles.brandName}>
          Kush Infotech
        </div> */}
    </div>
}
export default Header;