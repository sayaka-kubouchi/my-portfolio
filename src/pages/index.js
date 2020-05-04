import React, { useEffect } from "react"
import ReactDOM from "react-dom";
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { motion } from "framer-motion"
import * as FadeIn from "../components/fadeIn"

import myImg from "../images/me.jpg"

//アニメーション用
const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 50 },
}


const HeroImage = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 0 4rem;
  vertical-align: middle;
  align-items: center;
  background-color: #fff;
`
// About

const About = styled.div`
  display: flex;
  height: 100%;
  padding: 4rem;
  background-color: #eee;
`
// 写真と名前(左側)
const NameSpace = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: auto;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`
// コンテンツ(右側)
const AboutContents = styled.div`
  flex: 2;
  margin: 0 auto;
  width: 100%;
`

const AboutTabList = styled(TabList)`
  display: flex;
  margin-bottom: 3rem;
  justify-content: center;
`

// タブのリンク
const AboutTab = styled(Tab)`
  position: relative;
  display: inline-block;
  margin: 0 2rem;
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  transition: all 0.6s ease 0s;
  letter-spacing: 0.2rem;
  &::after {
    position: absolute;
    bottom: -12px;
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
    cursor: pointer;
  }
`

// activeなタブの表示
const ActiveStyles = styled(Tab)`
  position: absolute;
  bottom: -12px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: #333;
`

// タブの中身
const AboutTabPanel = styled(TabPanel)`
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  line-height: 1.2rem;
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroImage id="top">
        <p style={{margin: "auto"}}>ここにいい感じのSVGアニメーションが入るはず</p>

    </HeroImage>

    <About id="about"> 
      <NameSpace>
        <img src={myImg} alt="me" width="300px" style={{borderRadius: "50%"}} />
        <h4 style={{marginBottom: "0.4rem", letterSpacing: "0.1rem"}}>UI/UX Designer</h4>
        <h2 style={{marginBottom: "0.4rem", letterSpacing: "0.2rem"}}>Sayaka Kubouchi</h2>
        <p style={{marginBottom: "0.3rem", letterSpacing: "0.1rem"}}>@sayadesign2</p>
      </NameSpace>

      <AboutContents>
      <Tabs>
        <AboutTabList>
          <AboutTab style={{marginLeft: "0.5rem"}}>WHO I AM</AboutTab>
          <AboutTab>MIND</AboutTab>
          <AboutTab>SKILL SET</AboutTab>
        </AboutTabList>

        <AboutTabPanel>
          <p>1993年、高知県に生まれる。</p>
          <p>小学生のころ初めてパソコンに触れたとき、その楽しさと無限の可能性に心惹かれ、コンピュータに関わる職業に就くことを夢見る。</p>
          <br></br>
          <p>高校・大学で情報工学を学び、2016年、エンジニア職でソフトバンク株式会社に入社。</p>
          <p>社内システムの開発プロジェクトに携わる中、あるとき画面デザインを担当し、設計の奥深さと美意識の高さに面白みを感じてUIデザイナーに転向を決意。</p>
          <p>当時の部署はデザイナー不在であったが、デザインの重要性を訴えデザインチームを立ち上げた。</p>
          <br></br>
          <p>現在はUIデザイナーとしてサービス・アプリデザインに携わりながら、組織としてもUXデザインに取り組み、社内でデザインカルチャーを育てる活動を先導している。</p>
        </AboutTabPanel>

        <AboutTabPanel>
          <h4>ユーザーの前に「隣のエンジニア」に共感する</h4>
          <p>デザイナーは定性的な面からもユーザーに共感し、ユーザーの課題を解決に導くのが使命です。</p>
          <p>しかしそれ以前に、たとえば隣にいるエンジニアのような"チームの身近な人"に共感できないことには、チームの真の力は発揮できないと考えています。</p>
          <p>ユーザーに喜びを届けられるプロダクトは、デザイナーひとりの力では作ることができません。</p>
          <p>まずはチームの仲間に共感し、言葉の裏にある思いを理解することからはじめることを意識しています。</p>
          <br></br>
          <h4>ユーザーの前に「隣のエンジニア」に共感する</h4>
          <p>デザイナーは定性的な面からもユーザーに共感し、ユーザーの課題を解決に導くのが使命です。</p>
          <p>しかしそれ以前に、たとえば隣にいるエンジニアのような"チームの身近な人"に共感できないことには、チームの真の力は発揮できないと考えています。</p>
          <p>ユーザーに喜びを届けられるプロダクトは、デザイナーひとりの力では作ることができません。</p>
          <p>まずはチームの仲間に共感し、言葉の裏にある思いを理解することからはじめることを意識しています。</p>
        </AboutTabPanel>

        <AboutTabPanel>
          <h4>UI Tools</h4>
          <p>Adobe XD</p>
          <p>Sketch</p>
          <p>Figma</p>

        </AboutTabPanel>
      </Tabs>

      </AboutContents>

    </About>

    {/* <Image filename="gatsby-icon.png" alt="宇宙飛行士"　/> */}
  </Layout>
)

export default IndexPage
