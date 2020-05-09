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
  //scroll-snap-align: start;
  display: flex;
  height: 100vh;
  width: 100%;
  padding: 4rem;
  background-color: #0A1837;
  color: #fff;
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    margin: auto;
    align-items: center;
    padding: 4rem;
`

//Contact Links
const Links = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  color: #fff;
  align-items: center;
  justify-content: left;
  margin: 0 auto;
  padding: 4rem;
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
            <Title>
                <p style={{fontSize: "3rem", letterSpacing: "0.2rem"}}>CONTACT</p>
            </Title>

            <Links>
                <ContactIcon href="https://twitter.com/sayadesign2" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} style={{fontSize:"4rem"}}/></ContactIcon>
                <ContactIcon href="https://www.wantedly.com/users/18998999"  target="_blank" rel="noopener noreferrer"><img src={wantedlyIcon} alt="Wantedly" style={{width:"5.3rem", marginBottom: "0"}}/></ContactIcon>
                <ContactIcon href="mailto:"><FontAwesomeIcon icon={faEnvelope} style={{fontSize:"4rem"}}/></ContactIcon>
            </Links>  
        </Container>
    )
}
