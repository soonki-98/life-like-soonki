/* This is imported components of dev-portfolio library */
import {
  Header,
  TechStackList,
  Contact,
  Intro,
  Gallery,
  Item,
  Masonry,
  Image,
  Carousel,
  Experience,
  Card,
} from "dev-portfolio";
import styled from "styled-components";
import "./App.css";
import color from "./common/style/theme";
import { CHANNELS, COOPERATIONS, historyList, TEHC_STACKS } from "./assets";

function App() {
  return (
    <div className="App">
      <Header
        headerBackgroundColor="#0d192a"
        logoOption={{
          redirectUrl: "/",
          title: "순기로운생활",
          logoHidden: true,
          titleColor: `#ffffff`,
          titleSize: "30px",
        }}
        channels={CHANNELS}
        sideBarOption={{
          mainTitle: "순기로운생활",
          mainTitleSize: "24px",
          mainTitleColor: "#fff",
          mainTitleAlign: "left",
          mainTitleBorderColor: "#fff",
          iconName: "ant-design:menu-fold-outlined",
          iconSize: "28px",
          iconColor: `#fff`,
          iconMargin: "0px 12px 0px 12px",
          itemTextColor: "#fff",
          itemTextAlign: "left",
          itemBackgroundColor: `${color.mainColor}`,
          itemHoverdBackgroundColor: `${color.pointColor}60`,
          backgroundColor: `${color.mainColor}`,
        }}
      />
      <Intro
        id="['Intro', 'clarity:cursor-hand-open-line']"
        backgroundColor={color.mainColor}
        titleColor="#fff"
        shortIntroColor="#fff"
        shortIntro="책임지고 성장하는 개발자 | 민순기"
        description={`💡 평범한 학생에서 개발 동아리의 팀장까지...
- 성장과 책임감,저를 대표하는 두 단어입니다.
- 한 번 맡은 일은 반드시 책임져야 한다는 신조를 가지고 있어 열정맨이라는 소리를 많이 들었습니다.
- 21년도 7월 26일부터 이어진 1일 1커밋과 기술 블로그를 운영 하면서 꾸준히 성장중입니다.
- 책임감을 바탕으로 팀을 운영하여 팀원들 모두 가파른 성장을 이뤄냈고, 
다시 이를 바탕으로 “교내 동아리 플랫폼”을 개발 및 운영해 본 경험이 있습니다.
- 저의 이런 ‘성장성’과 ‘책임감’으로 어떤 프로젝트에서도 기대 이상의 성과를 달성할 것이라 자신합니다.`}
      />
      <TechStackListTitle id="['Skills', 'bx:coin-stack']">
        <h1>Skills</h1>
      </TechStackListTitle>
      <TechStackListWrapper>
        <TechStackLists>
          <TechStackList techStackList={TEHC_STACKS} />
        </TechStackLists>
        <TechStackLists>
          <TechStackList techStackList={COOPERATIONS} />
        </TechStackLists>
      </TechStackListWrapper>
      <CarouselWrap id="['TechTalk', 'bx:carousel']">
        <Carousel isAutoplayControl={false}>
          <Image
            src={require("./assets/images/techTalk/browser.png")}
            head="Browser Rendering"
            subhead="브라우저에 URL을 검색하면 일어나는 일"
            headColor="#fff"
            subheadColor="#fff"
          />
          <Image src={require("./assets/images/techTalk/recoil.png")} head="Recoil" subhead="" headColor="#fff" />
          <Image src={require("./assets/images/techTalk/hash.png")} head="Hash" subhead="" headColor="#fff" />
        </Carousel>
      </CarouselWrap>
      <ExperienceWrapper id="['Experience', 'carbon:list-boxes']">
        <Experience theme="vertical" title="What I did" historyList={historyList} />
      </ExperienceWrapper>
      <CarouselWrap id="['Projects', 'carbon:list-boxes']">
        <Carousel isAutoplay autoplaySpeed={1000 * 7} slideToShow={1}>
          <ProjectWrapper>
            <h1>Dev-portfolio</h1>
            <Item src={require("./assets/images/others/dev-port.gif")} />
          </ProjectWrapper>
          <ProjectWrapper>
            <h1>알서포트</h1>
            <Gallery column={1} padding="2em 0">
              <Item src={require("./assets/images/others/rm.png")} />
            </Gallery>
          </ProjectWrapper>
          <ProjectWrapper>
            <h1>모던 애자일 2기</h1>
            <Gallery column={2} padding="2em 0">
              <Item src={require("./assets/images/others/dongurami.png")} />
              <Item src={require("./assets/images/others/moae_2.jpeg")} />
            </Gallery>
          </ProjectWrapper>
        </Carousel>
        <Line />
      </CarouselWrap>

      <Contact
        id="['Contact', 'fluent:contact-card-20-regular']"
        titleColor={color.pointColor}
        subTitleColor={color.lightGrey}
        backgroundColor={color.mainColor}
        channels={CHANNELS}
        title=""
        subTitle="저에게 흥미가 생기셨다면"
        buttonText="편하게 연락주세요"
        email="alstnsrl98@gmail.com"
        aboutMeInfos={[
          {
            title: "P.H",
            titleColor: `${color.pointColor}`,
            description: "+82) 010-9096-9808",
            descriptionColor: `${color.lightGrey}`,
          },
          {
            title: "Email",
            titleColor: `${color.pointColor}`,
            description: "alstnsrl98@gmail.com",
            descriptionColor: `${color.lightGrey}`,
          },
        ]}
      />
    </div>
  );
}

export default App;

const TechStackListTitle = styled.div`
  padding: 1em 0;
  padding-bottom: 1px;
  background-color: ${color.mainColor};
  width: 100%;
  h1 {
    color: #fff;
    padding: 0 30px;
  }
`;

const CarouselWrap = styled.div`
  background-color: ${color.mainColor};
  padding: 2em 0;
  svg {
    color: #fff;
  }
`;

const TechStackListWrapper = styled.div`
  display: flex;
  background-color: ${color.mainColor};
  padding-top: 1px;
  padding-bottom: 1rem;
`;

const TechStackLists = styled.div`
  width: 100%;
`;

const ExperienceWrapper = styled.div`
  background-color: ${color.mainColor};
  padding: 1rem;
  .title {
    color: #fff;
  }
  .btaNPO {
    background-color: #fff;
    border-radius: 6px;
  }
`;

const ProjectWrapper = styled.div`
  h1 {
    padding: 0 30px;
    color: #fff;
  }
  li {
    max-height: 350px;
  }
`;

const Line = styled.hr`
  margin: 0 30px;
  margin-top: 3em;
  color: #fff;
`;
