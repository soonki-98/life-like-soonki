import { Experience } from "dev-portfolio";
import styled from "styled-components";
import { historyList } from "../assets";
import color from "../common/style/theme";

export default function Experiences() {
  return (
    <ExperienceWrapper id="['Experience', 'carbon:list-boxes']">
      <Experience id="experience" theme="vertical" title="What I did" historyList={historyList} />
    </ExperienceWrapper>
  );
}

const ExperienceWrapper = styled.div`
  background-color: ${color.mainColor};
  padding: 1rem;
  .title {
    color: #fff;
  }
  .btaNPO .jzHqAm {
    background-color: #fff;
    border-radius: 6px;
    width: 30em;
  }
`;
