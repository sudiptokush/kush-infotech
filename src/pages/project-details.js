import React from "react";
import Layout from "../components/layout";
import {navigate} from "gatsby";

const ProjectDetails = ({location}) => {
    const details = location.state ? location.state.source : navigate('/projects/');
    console.log(details);

    return <Layout>
        {details}
        <div className="project-details-container">
            
        </div>
    </Layout>
}

export default ProjectDetails;