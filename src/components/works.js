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
    padding: 6rem 8rem;
    background-color: #fff;
`

const Wrapper = styled.div`
    max-width: 1200px;
    margin: auto;
`

const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 25em);
    grid-auto-rows: 16em;
    justify-content: center;
    grid-gap: 4rem;
    max-width: 100%;
    margin: 4rem 0;
`

const Item = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    background: #fff;
    border-radius: 10px;
    text-align: center;
    vertical-align: top;
    align-items: center;
`

const WorkImg = styled.img`
    transition-duration: 0.6s;
    ${Item} :hover & {
        transform: scale(1.1);
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
    font-size: 1.2rem;
    font-weight: 700;
	text-align: center;
	color: #fff;
    letter-spacing: 0.1rem;
    line-height: 2rem;
    margin-bottom: 0;
`

const SubCaption = styled(Caption)`
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 0;
`



export default () => {
    return (
        <Container id="works">
            <Wrapper>
                <div style={{textAlign: "center"}}>
                    <h1 style={{marginBottom: "0.4rem"}}>Works</h1>
                </div>
            
                <Gallery>
                    <Item>
                        <Link to="work-ambient">
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
            </Wrapper>
        </Container>
    )
}

