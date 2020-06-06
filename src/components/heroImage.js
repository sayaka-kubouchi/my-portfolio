import React from "react"
import styled from "styled-components"

//Styles
const Container = styled.div`
    display: flex;
    min-height: 100vh;
    width: 100%;
    margin: auto 0;
    padding: 6rem 8rem;
    background-color: #fff;
    vertical-align: middle;
    @media screen and (max-width: 960px){
      padding: 4rem 2rem;
  }
`

const Wrapper = styled.div`
    max-width: 1200px;
    height: 100%;
    margin: auto;
`

const Title = styled.h1`
    font-family:'Pacifico';
    top: 50%;  
    width: 24em;
    height: 100%;
    margin: 0 auto;
    padding: 2rem;
    border-right: 2px solid rgba(255,255,255,.75);
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
    animation:  typewriter 4s steps(44) 1s 1 normal both,
                blinkTextCursor 500ms steps(44) infinite normal;
    @keyframes typewriter { /*タイプライターライクなアニメーション*/
        from {width: 0;}
        to {width: 24em;}
    }
    @keyframes blinkTextCursor { /*点滅するカーソルのアニメーション*/
        from {border-right-color: rgba(255,255,255,.75);}
        to {border-right-color: transparent;}
    }
`


//heroImage
export default () => {

    return (
        <Container id="top">
            <Wrapper>
                <Title>saya@design</Title>
            </Wrapper>
        </Container>
    )
}