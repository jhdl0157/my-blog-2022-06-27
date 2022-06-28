import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
        <p>센과 치히로 중에서..</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://img.huffingtonpost.com/asset/5d718b0b2500004d12059aa3.jpeg?ops=scalefit_630_noupscale"
      />

      <p>하울의 움직이는 성 중에서..</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://draco.pe.kr/wp-content/uploads/1/1260687116.jpg"
        />
    </Layout>
  );
};

export default IndexPage;