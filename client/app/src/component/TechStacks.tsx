import { TechStackList } from "dev-portfolio";
import styled from "styled-components";
import { COOPERATIONS, TEHC_STACKS } from "../assets";
import color from "../common/style/theme";

export default function TechStacks() {
  return (
    <>
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
    </>
  );
}
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

const TechStackListWrapper = styled.div`
  display: flex;
  background-color: ${color.mainColor};
  padding-top: 1px;
  padding-bottom: 1rem;
  svg {
    color: #fff;
  }
`;

const TechStackLists = styled.div`
  width: 100%;
`;
