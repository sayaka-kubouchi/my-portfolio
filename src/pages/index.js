import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

//Components
import HeroImage from "../components/heroImage"
import About from "../components/about"
import Works from "../components/works"
import Contact from "../components/contact"


/*
//全体コンテナ（Scroll-Snap-Control）
const Container = styled.div`
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding-top: 4rem;
  max-height: 100vh;
`
*/



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <HeroImage />
      <About />
      <Works />
      <Contact />

   
    {/* <Image filename="gatsby-icon.png" alt="宇宙飛行士"></Image> */}
  </Layout>
)

export default IndexPage
