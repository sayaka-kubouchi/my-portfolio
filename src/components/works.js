import React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/core'
import styled from "styled-components"

//work eyecatch
import UIMusicLogin from "../images/portfolio-ui-music-login.jpeg"
import UIChat from "../images/portfolio-ui-chat.jpeg"
import UICooking from "../images/portfolio-ui-cooking.jpeg"
import UIMusic from "../images/portfolio-ui-music.jpeg"

//Styles
const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    padding: 4rem;
    background-color: #fff;
`

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 30em);
    grid-auto-rows: 18em;
    justify-content: center;
    grid-gap: 4rem;
    max-width: 100%;
    margin: 4rem 8rem;
`

const Item = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    background: #fff;
    border-radius: 10px;
    text-align: center;
    vertical-align: middle;
    align-items: center;
`

const WorkImg = styled.img`
    transition-duration: 0.6s;
    ${Item} :hover & {
        transform: scale(1.2);
    }
`

const Mask = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
    left: 0;
    padding: 1.5rem;
	opacity: 0;
	background-color: rgba(0, 0, 0, 0.6);
	-webkit-transition:	all 0.3s ease;
	transition: all 0.3s ease;
    ${Item} :hover & {
        opacity: 1;
    }
`

const Caption = styled.p`
    font-family: 'M PLUS Rounded 1c';
	font-size: 1.5rem;
	text-align: center;
	color: #fff;
    letter-spacing: 0.1rem;
    line-height: 2rem;
`

const SubCaption = styled(Caption)`
	font-size: 1rem;
    margin-bottom: 0;
`



export default () => {
    return (
        <Container id="works">
            <div style={{textAlign: "center"}}>
                <h2 style={{marginBottom: "0.4rem", letterSpacing: "0.2rem"}}>WORKS</h2>
            </div>
        
            <Gallery>
                <Item>
                    <Link to="work1">
                        <WorkImg src={UIMusicLogin} />
                            <Mask>
                                <Caption>大学生向けミュージックアプリ</Caption>
                                <SubCaption>UI Design</SubCaption>
                            </Mask>
                    </Link>
                </Item>
                
                <Item>
                    <Link to="work1">
                        <WorkImg src={UIChat} />
                            <Mask>
                                <Caption>ビジネスでも使えるチャットアプリ</Caption>
                                <SubCaption>UI Design</SubCaption>
                            </Mask>
                    </Link>
                </Item>

                <Item>
                    <Link to="work1">
                        <WorkImg src={UICooking} />
                            <Mask>
                                <Caption>冷蔵庫にあるものでつくれるお料理レシピアプリ</Caption>
                                <SubCaption>UI Design</SubCaption>
                            </Mask>
                    </Link>
                </Item>

                <Item>
                    <Link to="work1">
                        <WorkImg src={UIMusic} />
                            <Mask>
                                <Caption>インスタユーザー向けミュージックアプリ</Caption>
                                <SubCaption>UI Design</SubCaption>
                            </Mask>
                    </Link>
                </Item>
            </Gallery>
        
        </Container>
    )
}

