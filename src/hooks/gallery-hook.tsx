import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
import techJson from '../assets/tech-logo.json';

function useGallery(source: string) {
    const gql = graphql`{
        techLogo:
        allFile(filter:{sourceInstanceName: {eq:"techLogo"}}) {
            edges {
              node {
                name
                childImageSharp {
                  fixed(height:200) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
    }`;

    const data = useStaticQuery(gql);

    switch(source) {
      case "techLogo":
        const allImages = {}; 
        data[source].edges.forEach(x => {
              allImages[x.node.name] = x.node.childImageSharp.fixed;
        });
        const temp = techJson.map((j: any, index: number) => {
          return <div key={index} className="tech-logo">
              <Img fixed={allImages[j.image]}></Img>
              <div className="name">{j.name}</div>
          </div>
        });
        return <div>{temp}</div>
    }
}
export { useGallery };