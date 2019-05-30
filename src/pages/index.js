import React from "react";
import Layout from "../components/layout";
import { useGallery } from '../hooks/gallery-hook';
import SEO from "../components/seo";
import { useCarousel } from "../hooks/carousel-hook";
import seoJson from "../assets/seo.json";

function IndexPage() {
  return <Layout>
    <SEO title="Kush Infotech Home" description={seoJson["decription"]} keywords={seoJson["keywords"]}/>
    <div className="home-page-container">
      <div className="carousel-container">
        {useCarousel()}
      </div>
      <div className="tech-logo-container">
        {useGallery('techLogo')}
      </div>
    </div>
  </Layout>
}

export default IndexPage
