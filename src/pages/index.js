import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

//Components
import HeroImage from "../components/heroImage"
import About from "../components/about"
import Mind from "../components/mind"
import Works from "../components/works"
import Contact from "../components/contact"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <HeroImage />
      <About />
      <Mind />
      <Works />
      <Contact />

   
    {/* <Image filename="gatsby-icon.png" alt="宇宙飛行士"></Image> */}
  </Layout>
)

export default IndexPage
