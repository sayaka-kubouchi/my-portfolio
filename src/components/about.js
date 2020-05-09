import React from "react"
import styled from "styled-components"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

//myImage
import myImg from "../images/me.jpg"

// Styles
const Container = styled.div`
  //scroll-snap-align: start;
  display: flex;
  height: 100vh;
  width: 100%;
  padding: 4rem;
  background-color: #eee;
  align-items: center;
`

// About 左側コンテンツ 上下中央, flex=1
const NameSpace = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin: auto;
  align-items: center;
  padding: 4rem;
`

// 右側コンテンツ 上下中央, flex=2
const AboutContents = styled.div`
  flex: 2;
  margin: 0 auto;
  width: 100%;
  padding: 4rem;
`

//タブのリンク(リスト)
const AboutTabList = styled(TabList)`
  display: flex;
  margin-bottom: 3rem;
  justify-content: center;
  width: 100%;
`

// タブのリンク(個別)
const AboutTab = styled(Tab)`
  position: relative;
  display: inline-block;
  margin: 0 2rem;
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  transition: all 0.6s ease 0s;
  letter-spacing: 0.2rem;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

// タブの中身
const AboutTabPanel = styled(TabPanel)`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  line-height: 1.2rem;
`

//active tab style
const underline = { 
  borderBottom: 'solid 2px #333',
  paddingBottom: "12px",
  transition: "all 0.3s ease 0s"
};

//about
class About extends React.Component {
    constructor(props) {
      super(props);
      this.state = { tabIndex: 0 };
    }
    render() {
      return (
        <Container id="about"> 
            <NameSpace>
                <img src={myImg} alt="me" width="300px" style={{borderRadius: "50%"}} />
                <h4 style={{marginBottom: "0.4rem", letterSpacing: "0.1rem"}}>UI/UX Designer</h4>
                <h2 style={{marginBottom: "0.4rem", letterSpacing: "0.2rem"}}>Sayaka Kubouchi</h2>
                <p style={{marginBottom: "0.3rem", letterSpacing: "0.1rem"}}>@sayadesign2</p>
            </NameSpace>

            <AboutContents>
                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <AboutTabList>
                        <AboutTab style={this.state.tabIndex === 0 ? underline : null}>WHO I AM</AboutTab>
                        <AboutTab style={this.state.tabIndex === 1 ? underline : null}>MIND</AboutTab>
                        <AboutTab style={this.state.tabIndex === 2 ? underline : null}>SKILL SET</AboutTab>
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
        </Container>
        )
    }
}
export default About