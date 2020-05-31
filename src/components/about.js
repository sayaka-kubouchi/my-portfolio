import React from "react"
import styled from "styled-components"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

//myImage
import myImg from "../images/me.jpg"

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 6rem 8rem;
  background-color: #eee;
  align-items: center;
`

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 960px) {
      flex-direction: column;
    }
`

// About 左側コンテンツ 上下中央, flex=1
const NameSpace = styled.div`
  flex: 1;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  padding: 4rem 0;
  text-align: center;
  h2, h4, p {
    margin-bottom: 0.4rem;
    letter-spacing: 0.1rem;
  }
`

// 右側コンテンツ 上下中央, flex=1
const AboutContents = styled.div`
  flex: 2;
  margin: auto;
  width: 100%;
  padding: 4rem 0;
`

//about
class About extends React.Component {
    render() {
      return (
        <Container id="about"> 
          <Wrapper>
            <div style={{textAlign: "center"}}>
                <h1 style={{marginBottom: "0.4rem"}}>About me</h1>
            </div>

            <Contents>
              <NameSpace>
                  <img src={myImg} alt="me" width="300px" style={{borderRadius: "50%"}} />
                  <h4>UI/UX Designer</h4>
                  <h2>Sayaka Kubouchi</h2>
                  <p>@sayadesign2</p>
              </NameSpace>

              <AboutContents>
                  <p>
                    1993年、高知県に生まれる。
                  </p>
                  <p>
                    小学3年生のころ初めてパソコンに触れたとき、その楽しさと無限の可能性に心惹かれ、コンピュータに関わる職業に就くことを夢見る。
                  </p>
                  <p>
                    高校・大学で情報工学を学び、2016年、システムエンジニアとしてソフトバンク株式会社に入社。
                  </p>
                  <p>
                    社内システムの開発プロジェクトに携わる中、あるとき画面デザインを担当し、設計の奥深さと美意識の高さに面白みを感じてUIデザイナーに転向を決意。
                    当時の部署はデザイナー不在であったが、デザインの重要性を訴えデザインチームを立ち上げた。
                  </p>
                  <p>
                    現在はUIデザイナーとしてサービス・アプリデザインに携わりながら、組織としてもUXデザインに取り組み、社内でデザインカルチャーを育てる活動を先導している。
                  </p>
              </AboutContents>
            </Contents>
          </Wrapper>
        </Container>
        )
    }
}
export default About