import React from "react";
import Layout from "../components/layout";
import { useGallery } from '../hooks/gallery-hook';
import SEO from "../components/seo";
import { useCarousel } from "../hooks/carousel-hook";

function IndexPage() {
  return <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
