import { Intro } from "dev-portfolio";
import styled from "styled-components";
import color from "../common/style/theme";

export default function Introduction() {
  return (
    <Wrapper id="['Intro', 'clarity:cursor-hand-open-line']">
      <ProfileImage src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F73e73d56-d664-407c-b3d5-4621a7387b24%2F%EB%AF%BC%EC%88%9C%EA%B8%B0.jpeg?table=block&id=4016be9f-19fe-448d-9852-db3b958248f3&spaceId=70f87bcf-d867-4615-9e16-b77ee3fd56e7&width=250&userId=601054f0-a611-49e0-84b9-04831ec920f4&cache=v2" />
      <Intro
        id="Intro"
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  #Intro,
  .zLmIh {
    width: 90%;
  }
`;

const ProfileImage = styled.img`
  margin: 30px;
  border-radius: 6px;
  width: 300px;
`;
