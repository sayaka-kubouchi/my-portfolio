//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link, animateScroll as scroll } from "react-scroll";

const HeaderWrapper = styled.div`
  position: fixed;
  height: 4rem;
  margin-bottom: 1.45rem;
  display: flex;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 9999;
`

const HeaderInner = styled.div`
  margin: auto;
  max-width: 100%;
  width: 100vw;
  padding: 0 4rem;
`

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoSpace = styled.div``

const Logo = styled(Link)`
  font-family: 'Pacifico';
  color: #333;
  text-decoration: none;
  font-size: 1.5rem;
`

const GlobalNavSpace = styled.div``

const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  transition: all 0.6s ease 0s;
  letter-spacing: 0.2rem;
  &:hover {
    pointer: cursor;
  }
 
  &.active {
    border-bottom: 3px solid #333;
  }
`


const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderInner>
      <Flexbox>
        <LogoSpace>
          <Logo to="top" duration={1000}>{siteTitle}</Logo>
        </LogoSpace>
      
        <GlobalNavSpace class="nav-item">
            <StyledLink to="about" duration={1000}>ABOUT</StyledLink>
            <StyledLink activeClass="active" to="works" duration={1000}>WORKS</StyledLink>
            <StyledLink activeClass="active" to="contact" duration={1000}>CONTACT</StyledLink>
        </GlobalNavSpace>
      </Flexbox>
    </HeaderInner>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
