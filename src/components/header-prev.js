//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link, animateScroll as scroll } from "react-scroll";

const Wrapper = styled.div`
  position: fixed;
  height: 3.5rem;
  margin-bottom: 1.45rem;
  display: flex;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.7);
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


const Header = ({ siteTitle }) => (
  <Wrapper>
    <Inner>
        <Prev href="javascript:history.back();" duration={1000}>←prev</Prev>
    </Inner>
  </Wrapper>
)

export default Header
