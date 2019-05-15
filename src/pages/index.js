import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { useGallery } from '../hooks/gallery-hook';
import SEO from "../components/seo";

function IndexPage() {
  const techLogo = useGallery('techLogo');
  return <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {techLogo}
  </Layout>
}

export default IndexPage
