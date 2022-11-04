import { ExperienceHistoryListType } from "dev-portfolio/dist/common/types/ComponentTypes/ExperienceType";

const historyList: ExperienceHistoryListType[] = [
  {
    startDate: "2022-08-01",
    endDate: "2022-10-24",
    title: "Dev-portfolio",
    description: `웹 포트폴리오를 쉽게 만들수 있는 보일러플레이트

    ○ dev-portfolio : 웹 포트폴리오 UI 라이브러리
    ○ create-dev-portfolio : 웹 포트폴리오 보일러 플레이트
    ○ npx create-dev-protfolio : 보일러 플레이트 설치 명령어`,
  },
  {
    startDate: "2022-03-8",
    endDate: "Ing",
    title: "알서포트 [리모트 미팅]",
    description: `
    웹 브라우저 기반의 화상회의 솔루션 리모트미팅 개발 

    ○ 커스텀 레이아웃 개발
    ○ 웹 접근성 작업
    ○ 모드 변경 렌더링 속도 약 2000ms에서 300ms 이내로 개선
    
  `,
  },
  {
    startDate: "2022-03-8",
    endDate: "2022-05-31",
    title: "알서포트 [Contact]",
    description: `
    사내 연락망 서비스 

    ○ React와 NodeJS 사용하여 사내 연락망 서비스 개발
    ○ PWA 적용
    ○ Sentry를 통한 에러 추적
    
  `,
  },
  {
    startDate: "2021-05-07",
    endDate: "2022-01-31",
    title: "모던 애자일 2기",
    description: `
    교내 동아리 플랫폼 동그라미 개발

    역할 - 동아리 부회장, 프론트 팀장
    
    ○ 동아리 홈 개발
    ○ 쪽지 및 알림
    ○ 동아리 어드민 개발
    ○ 홍보 게시판 개발

  `,
  },
];

export default historyList;
