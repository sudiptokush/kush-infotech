import React, {useState} from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import Fade from "react-bootstrap/Fade";

const Projects = () => { 
    const [siteOpen, setSiteOpen] = useState(false);
    const [appOpen, setAppOpen] = useState(false);

    return <Layout>
        <div className="projectsContainer">
            <div className="web-sites" onClick={() => setSiteOpen(!siteOpen )}>Web Sites <FontAwesomeIcon icon={faSortDown}/></div>
            <Fade in={siteOpen}>
                <div id="fade-container">
                    <div className="image-container">
                    
                    </div>
                    <div className="description">
                        Hello
                    </div>
                </div>
            </Fade>
            
            <div className="web-applications" onClick={() => setAppOpen(!appOpen )}>Web Applications <FontAwesomeIcon icon={faSortDown} /></div>
            <Fade in={appOpen}>
                <div id="fade-container">
                    <div className="image-container">
                    
                    </div>
                    <div className="description">
                        Hello
                    </div>
                </div>
            </Fade>
        </div>
    </Layout>
}
export default Projects;