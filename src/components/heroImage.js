import React from "react"
import styled from "styled-components"

//Styles
const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding: 8rem 16rem;
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