import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
    background: #333;
    height: 3rem;
    align-items: center;
`

const FootLine = styled.div`
    font-family: 'Pacifico';
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    padding: 0 4rem;
    color: #fff;
`

const Footer = () => (
  <FooterWrapper>
    <FootLine>
        {new Date().getFullYear()}, Created by Sayaka Kubouchi
    </FootLine>
  </FooterWrapper>
)

export default Footer
