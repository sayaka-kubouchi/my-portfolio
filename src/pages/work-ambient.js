import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import LayoutChild from "../components/layout-child"
import SEO from "../components/seo"

import UIMusicLogin from "../images/portfolio-ui-music-login.jpeg"

//Styles
const Container = styled.div`
  height: auto;
  width: 100%;
  margin: auto;
  padding: 6rem 4rem;
  background-color: #fff;
`

const Title = styled.div`
  text-align: center;
  margin: 2rem 0;
`

const HeroImage = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  max-width: 1200px;
  text-align: center;
  align-items: stretch;
  margin: 2rem auto;
`

const Description = styled(HeroImage)`
  text-align: center;
`

const Role = styled.div`
  margin-bottom: 2rem;
`

const Date = styled(Role)`
`

const Overview = styled(Role)`
  p {
    text-align: left;
  }
`

const Work1 = () => (
  <LayoutChild>
    <SEO title="Page two" />
    <Container>
      <Title>
        <h1 style={{marginBottom: "1rem"}}>Ambient</h1>
        <p>大学生向けミュージックアプリ</p>
      </Title>

      <HeroImage>
        <img src={UIMusicLogin} style={{width: "100%", borderRadius: "10px"}}/>
      </HeroImage>

      <Description>
      <Overview>
          <h2>OVERVIEW</h2>
          <p>
            大学生向けミュージックアプリのログイン画面案です。
          </p>
          <p>
            通学やランニング中に軽やかな気分で使ってもらえるよう、配色やグラフィックの使い方を意識しました。
            ユーザー層を踏まえ、最も利用者数が多いLINEでのSNSログイン機能を含めています。
          </p>
          <p>
            右の画面はレコメンド機能をイメージして作成したものです。知らない曲との出会いを目的とし、ジャケットの美しさを際立たせつつ、他のプレイリストにもスムーズに遷移できるUIを目指しました。
          </p>
        </Overview>

        <Role>
          <h2>ROLE</h2>
          <p>UI Design</p>
        </Role>

        <Date>
          <h2>DATE</h2>
          <p>2019.08</p>
        </Date>
      </Description>
      
    </Container>
  </LayoutChild>
)

export default Work1
