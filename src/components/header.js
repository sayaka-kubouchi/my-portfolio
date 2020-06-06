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
  width: 70%;
`

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  font-family: 'Pacifico';
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.6s ease 0s;
  &:hover {
    opacity: 0.6;
  }
`

const GlobalNavSpace = styled.div``

const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  font-size: 0.9rem;
  transition: all 0.6s ease 0s;
  letter-spacing: 0.1rem;
  &:hover {
    pointer: cursor;
    opacity: 0.6;
  }
 
  &.active {
    border-bottom: 3px solid #333;
  }
`


const Header = ({ siteTitle }) => (
  <Wrapper>
    <Inner>
      <Flexbox>
        <div>
          <Logo to="top" duration={300}>{siteTitle}</Logo>
        </div>
      
        <GlobalNavSpace class="nav-item">
            <StyledLink to="about" duration={300}>ABOUT</StyledLink>
            <StyledLink to="mind" duration={300}>MIND</StyledLink>
            <StyledLink to="works" duration={300}>WORKS</StyledLink>
            <StyledLink to="contact" duration={300}>CONTACT</StyledLink>
        </GlobalNavSpace>
      </Flexbox>
    </Inner>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
