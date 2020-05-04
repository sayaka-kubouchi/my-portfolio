import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import AnchorLink from 'react-anchor-link-smooth-scroll'

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

const Logo = styled(AnchorLink)`
  font-family: 'Pacifico';
  color: #333;
  text-decoration: none;
  font-size: 1.5rem;
`

const GlobalNavSpace = styled.div``

const StyledLink = styled(AnchorLink)`
  position: relative;
  display: inline-block;
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  transition: all 0.6s ease 0s;
  letter-spacing: 0.2rem;
  &::after {
    position: absolute;
    bottom: -10px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #333;
    transform: scale(0, 1);
    transform-origin: center top;
    transition: transform .3s;
  }
  &:hover::after {
    transform: scale(1, 1);
  }
  &:hover {
    pointer: cursor;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderInner>
      <Flexbox>
        <LogoSpace>
          <Logo href="#top">{siteTitle}</Logo>
        </LogoSpace>
      
        <GlobalNavSpace>
            <StyledLink href="#about">ABOUT</StyledLink>
            <StyledLink href="#works">WORKS</StyledLink>
            <StyledLink href="#contact">CONTACT</StyledLink>
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
