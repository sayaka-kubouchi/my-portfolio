//import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  position: fixed;
  height: 3.5rem;
  margin-bottom: 1.45rem;
  display: flex;
  width: 100vw;
  background-color: rgba(255, 255, 255, 1);
  z-index: 9999;
`

const Inner = styled.div`
  margin: auto;
  max-width: 100%;
  width: 100vw;
  padding: 0 4rem;
`

const Prev = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.6s ease 0s;
  &:hover {
    opacity: 0.6;
  }
`


const HeaderPrev = ({ siteTitle }) => (
  <Wrapper>
    <Inner>
        <Prev href="javascript:history.back();" duration={300}><FontAwesomeIcon icon={faChevronLeft} style={{fontSize:"1rem", margin: "0 0.5rem"}}/>prev</Prev>
    </Inner>
  </Wrapper>
)

export default HeaderPrev
