import React from "react"
import styled from "styled-components"

//Styles
const Container = styled.div`
  //scroll-snap-align: start;
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 0 4rem;
  vertical-align: middle;
  align-items: center;
  background-color: #fff;
`

//heroImage
export default () => {

    return (
        <Container id="top">
            <p style={{margin: "auto"}}>ここにいい感じのSVGアニメーションが入るはず</p>
        </Container>
    )
}