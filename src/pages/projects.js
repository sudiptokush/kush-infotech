import React, {useState} from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import Fade from "react-bootstrap/Fade";
import { useGallery } from "../hooks/gallery-hook";

const Projects = () => { 
    const [siteOpen, setSiteOpen] = useState(false);
    const [appOpen, setAppOpen] = useState(false);
    const [demoOpen, setDemoOpen] = useState(false);
    const [windowOpen, setWindowOpen] = useState(false);

    return <Layout>
        <div className="projectsContainer">

            {/* Website Section */}
            <div className="projects" onClick={() => setSiteOpen(!siteOpen )}>Web Sites <FontAwesomeIcon icon={faSortDown}/></div>
            <Fade in={siteOpen}>
                <div id="fade-container">
                    
                    <div className="project-site-name">
                        <a className="siteLink" target="_blank" href="http://www.kyokushinkaikanindia.com">Kyokushin Kaikan India</a>
                    </div>
                    <div className="project-description">
                        Its a React Gatsby based project.
                    </div>
                    <div className="project-image-container">
                        {useGallery('kyokushin')}
                    </div>

                    
                    <div className="project-site-name">
                        <a className="siteLink" target="_blank" href="https://www.capital-chowringhee.com">Capital Chowringhee Pvt Ltd</a>
                    </div>
                    <div className="project-description">
                        Its a React Gatsby based project.
                    </div>
                    <div className="project-image-container">
                        {useGallery('capital')}
                    </div>

                    
                    <div className="project-site-name">
                        <a className="siteLink" target="_blank" href="https://www.selfandbeyond.in">Self &amp; Beyond</a>
                    </div>
                    <div className="project-description">
                        Its an angular 2+ based static website built for a psychotherapy Well Being Center. They offer
                        regular Psychotherapy sessions, zumba and yoga sessions for fitness and movement therapy and 
                        meditation sessions.
                    </div>
                    <div className="project-image-container">
                        {useGallery('selfandbeyond')}
                    </div>

                </div>
            </Fade>
            {/* Website Section */}


            {/* Web Application Section */}
            <div className="projects" onClick={() => setAppOpen(!appOpen )}>Web Applications <FontAwesomeIcon icon={faSortDown} /></div>
            <Fade in={appOpen}>
                <div id="fade-container">
                    <div className="project-site-name">
                        Asset Tracking
                    </div>
                    <div className="project-description">
                        Project based on .NET
                    </div>
                    <div className="project-image-container">
                        {useGallery('asset')}
                    </div>
                
                    <div className="project-site-name">
                        Payroll
                    </div>
                    <div className="project-description">
                        Project based on .NET and Silverlight
                    </div>
                    <div className="project-image-container">
                        {useGallery('payroll')}
                    </div>
                </div>
            </Fade>
            {/* Web Application Section */}


            {/* Windows Application Section */}
            <div className="projects" onClick={() => setWindowOpen(!windowOpen )}>Windows Applications <FontAwesomeIcon icon={faSortDown} /></div>
            <Fade in={windowOpen}> 
                <div id="fade-container">
                    <div className="project-site-name">
                        Accounts
                    </div>
                    <div className="project-description">
                        Power Builder based software
                    </div>
                    <div className="project-image-container">
                        {useGallery('accounts')}
                    </div>
                </div>
            </Fade>
            {/* Demo Application Section */}


            {/* Demo Application Section */}
            <div className="projects" onClick={() => setDemoOpen(!demoOpen )}>Demo Applications <FontAwesomeIcon icon={faSortDown} /></div>
            <Fade in={demoOpen}> 
                <div id="fade-container">
                    <div className="project-site-name">
                        Medical Domain Project 
                    </div>
                    <div className="project-description">
                        Angular 6 +
                    </div>
                    <div className="project-image-container">
                        {useGallery('medical')}
                    </div>
                
                    <div className="project-site-name">
                        E-Shopping Demo 
                    </div>
                    <div className="project-description">
                        Angular 6 +
                    </div>
                    <div className="project-image-container">
                        {useGallery('eshop')}
                    </div>
                </div>
            </Fade>
            {/* Demo Application Section */}

        </div>
    </Layout>
}
export default Projects;