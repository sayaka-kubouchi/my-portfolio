import React from "react"
import styled from "styled-components"

//FontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

//WantedlyIcon
import wantedlyIcon from "../images/wantedly_mark_white.png"

//Contact
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 6rem 8rem;
  background-color: #0A1837;
  color: #fff;
  text-align: center;
`

const Wrapper = styled.div`
  margin: auto;
`

const Title = styled.div`
    width: 100%;
    margin: auto;
    text-align: center;
`

//Contact Links
const Links = styled.div`
  display: flex;
  width: 100%;
  color: #fff;
  align-items: center;
  justify-content: center;
  margin: auto;
`

const ContactIcon = styled.a`
  color: #fff;
  transition: all 0.3s ease 0s;
  margin: 2rem;
  &:hover {
    opacity: 0.6;
  }
`

//contact
export default () => {
    return (
        <Container id="contact">
            <Wrapper>
                <h1 style={{fontSize: "3rem", color: "rgba(255, 255, 255, 0.8)", marginBottom: "1rem"}}>Contact</h1>

                <Links>
                    <ContactIcon href="https://twitter.com/sayadesign2" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} style={{fontSize:"4rem"}}/></ContactIcon>
                    <ContactIcon href="https://www.wantedly.com/users/18998999"  target="_blank" rel="noopener noreferrer"><img src={wantedlyIcon} alt="Wantedly" style={{minWidth:"5.3rem", maxWidth:"5.3rem", marginBottom: "0"}}/></ContactIcon>
                    <ContactIcon href="mailto:"><FontAwesomeIcon icon={faEnvelope} style={{fontSize:"4rem"}}/></ContactIcon>
                </Links>  
            </Wrapper>
        </Container>
    )
}
