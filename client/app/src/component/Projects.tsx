import { Carousel, Gallery, Item } from "dev-portfolio";
import styled from "styled-components";
import color from "../common/style/theme";

export default function Projects() {
  return (
    <CarouselWrap id="['Projects', 'carbon:list-boxes']">
      <Carousel slideToShow={1}>
        <ProjectWrapper>
          <h1>Dev-portfolio</h1>
          <Item
            src={require("../assets/images/others/dev-port.gif")}
            redirectURL="https://github.com/modern-agile-team/dev-portfolio"
            title="DEV-PORTFOLIO"
            titleColor="#000"
            description=""
            hoverdInnerBorderColor="#000"
          />
        </ProjectWrapper>
        <ProjectWrapper>
          <h1>알서포트</h1>
          <Gallery column={1} padding="2em 0">
            <Item
              src={require("../assets/images/others/rm.png")}
              redirectURL="https://remotemeeting.com"
              title="REMOTEMEETING"
              titleColor="#000"
              description=""
              hoverdInnerBorderColor="#000"
            />
          </Gallery>
        </ProjectWrapper>
        <ProjectWrapper>
          <h1>모던 애자일 2기</h1>
          <Gallery column={2} padding="2em 0">
            <Item
              src={require("../assets/images/others/dongurami.png")}
              redirectURL="https://dongurami.co.kr"
              title="DONGURAMI"
              titleColor="#000"
              description=""
              hoverdInnerBorderColor="#000"
            />
            <Item
              src={require("../assets/images/others/moae_2.jpeg")}
              redirectURL="https://catnip-echium-964.notion.site/25f5a56ccbe94545be0a4608ca55f026"
              title="VISIT MOAE NOTION"
              titleColor="#000"
              description=""
              hoverdInnerBorderColor="#000"
            />
          </Gallery>
        </ProjectWrapper>
      </Carousel>
    </CarouselWrap>
  );
}

const CarouselWrap = styled.div`
  background-color: ${color.mainColor};
  padding: 2em 0;
  svg {
    color: #fff;
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
