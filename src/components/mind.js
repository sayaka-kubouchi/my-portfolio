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
  background-color: #fff;
  align-items: center;
  vertical-align: middle;
  margin: auto 0;
  @media screen and (max-width: 960px){
      padding: 4rem 2rem;
  }
`
const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`

// 右側コンテンツ 上下中央, flex=1
const Contents = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 4rem 0;
`

//蛍光ペン
const Underline = styled.span`
    background: linear-gradient(transparent 70%, rgb(255, 204, 102) 0%);
`

//about
class Mind extends React.Component {
    render() {
      return (
        <Container id="mind"> 
          <Wrapper>
            <div style={{textAlign: "center"}}>
                <h1><Underline>Mind</Underline></h1>
                <p>日々の仕事の中で意識していること</p>
            </div>
            <Contents>
              <div style={{marginBottom: "4rem"}}>
                <h2>ユーザーの前に「隣のエンジニア」に共感する</h2>
                <p>
                  デザイナーは定性的な面からもユーザーに共感し、ユーザーの課題を解決に導くのが使命です。
                  しかしそれ以前に、たとえば隣にいるエンジニアのような"チームの身近な人"に共感できないことには、チームの真の力は発揮できないと考えています。
                </p>
                <p>
                  お客さまに喜びを届けられるプロダクトは、デザイナーひとりの力では作ることができません。
                  まずはチームの仲間に共感し、言葉の裏にある思いを理解することからはじめることを意識しています。
                </p>
              </div>
              <div style={{marginBottom: "4rem"}}>
                <h2>視座を高く持つ</h2>
                <p>
                  目の前のタスクに追われて小さなことに固執することなく、俯瞰的な目線を意識することを大切にしています。
                  たとえば自分のデザインが認められることよりも、組織が前進したりお客さまに少しでも早く価値を届けることを優先して考えています。
                </p>
                <p>
                  またユーザー体験の改善が思うように進まない要因を突き詰めていくと、サービスそのものの課題よりも、組織の課題に行き着くことが多いと感じています。
                  そのため組織デザインにも関心があります。
                </p>
              </div>
              <div>
                <h2>「共感」に「思いやり」をプラスする</h2>
                <p>
                  価値を届けるデザインはユーザーへの"Empathy(共感)"からはじまります。
                  しかしデザイナーも人間である以上「自分の経験したことのない事象や環境を完全に理解することはできない」という意識を持つ必要があると考えています。
                  そうでなければ、自分はユーザーを理解できていると思い込み、時に傲慢なデザインをしてしまうことになりかねません。
                </p>
                <p>
                  だからこそ、時に自分を振り返り、思考に「思いやり」のエッセンスをプラスすることを心がけています。これはユーザーだけでなく、一緒に働く仲間に対しても同様です。
                </p>
              </div>
            </Contents>
          </Wrapper>
        </Container>
        )
    }
}
export default Mind