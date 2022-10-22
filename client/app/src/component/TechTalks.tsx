import { Carousel, Image } from "dev-portfolio";
import styled from "styled-components";
import color from "../common/style/theme";

function TechTalks() {
  return (
    <CarouselWrap id="['TechTalk', 'bx:carousel']">
      <Carousel isAutoplayControl={false} isArrowShow={false} isAutoplay autoplaySpeed={1000 * 7}>
        <Image
          src={require("../assets/images/techTalk/browser.png")}
          head="Browser Rendering"
          subhead="브라우저에 URL을 검색하면 일어나는 일"
          headColor="#fff"
          subheadColor="#fff"
          redirectURL="https://www.youtube.com/watch?v=Ld8Nsyyip7Y"
        />
        <Image
          src={require("../assets/images/techTalk/recoil.png")}
          head="Recoil"
          subhead=""
          headColor="#fff"
          redirectURL="https://www.youtube.com/watch?v=ctswwXkdsy4"
        />
        <Image
          src={require("../assets/images/techTalk/hash.png")}
          head="Hash"
          subhead=""
          headColor="#fff"
          redirectURL="https://www.youtube.com/watch?v=gmxIKNpGekM"
        />
      </Carousel>
    </CarouselWrap>
  );
}

export default TechTalks;

const CarouselWrap = styled.div`
  background-color: ${color.mainColor};
  padding: 2em 0;
  svg {
    color: #fff;
  }
`;
