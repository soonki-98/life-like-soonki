import { Carousel, Gallery, Item } from "dev-portfolio";
import styled from "styled-components";
import color from "../common/style/theme";

export default function Projects() {
  return (
    <CarouselWrap id="['Projects', 'carbon:list-boxes']">
      <Carousel slideToShow={1}>
        <ProjectWrapper>
          <h1>Dev-portfolio</h1>
          <Item src={require("../assets/images/others/dev-port.gif")} />
        </ProjectWrapper>
        <ProjectWrapper>
          <h1>알서포트</h1>
          <Gallery column={1} padding="2em 0">
            <Item src={require("../assets/images/others/rm.png")} />
          </Gallery>
        </ProjectWrapper>
        <ProjectWrapper>
          <h1>모던 애자일 2기</h1>
          <Gallery column={2} padding="2em 0">
            <Item src={require("../assets/images/others/dongurami.png")} />
            <Item src={require("../assets/images/others/moae_2.jpeg")} />
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
