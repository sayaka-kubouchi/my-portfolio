import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Styles
const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 8rem 4rem 4rem;
  background-color: #eee;
`

const Work1 = () => (
  <Layout>
    <SEO title="Page two" />
    <Container>
      <div style={{textAlign: "center"}}>
          <h2 style={{marginBottom: "0.4rem", letterSpacing: "0.2rem"}}>WORK1</h2>
      </div>
      <p>ここに説明</p>
    </Container>
  </Layout>
)

export default Work1
