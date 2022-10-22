import { ExperienceHistoryListType } from "dev-portfolio/dist/common/types/ComponentTypes/ExperienceType";

const historyList: ExperienceHistoryListType[] = [
  {
    startDate: "2022-08-01",
    endDate: "2022-10-24",
    title: "Dev-portfolio",
    description: `웹 포트폴리오를 쉽게 만들수 있는 보일러플레이트

    아래 3개의 프로젝트로 구성

    ○ dev-portfolio : 웹 포트폴리오 UI 라이브러리
    ○ create-dev-portfolio : 웹 포트폴리오 보일러 플레이트
    ○ npx create-dev-protfolio : 보일러 플레이트 설치 명령어`,
  },
  {
    startDate: "2022-03-8",
    endDate: "ing",
    title: "알서포트",
    description: `
    웹 브라우저 기반의 화상회의 솔루션 리모트미팅 개발
    [ https://remotemeeting.com ]
  `,
  },
  {
    startDate: "2021-05-07",
    endDate: "2022-01-31",
    title: "모던 애자일 2기",
    description: `
    교내 동아리 플랫폼 동그라미 개발
    [ https://dongurami.co.kr ]

    역할 - 동아리 부회장, 프론트 팀장
  `,
  },
];

export default historyList;
