import { TechStackPropsType } from "dev-portfolio/dist/common/types/ComponentTypes/TechStack/TechStackType";

export const techStacks: TechStackPropsType[] = [];
export const cooperations: TechStackPropsType[] = [];

function addTechStacks({ arr, skill, rate }: { arr: TechStackPropsType[]; skill: string; rate: number }) {
  const size = "24px";
  arr.push({
    nameOption: {
      name: skill,
      logoName: skill,
      fontSize: size,
      logoSize: size,
      nameTextColor: "#fff",
    },
    progressBarOption: {
      rateText: `${rate}%`,
      width: "100%",
      height: "35px",
      colorTo: "#6082ef",
      rateTextColor: "#fff",
    },
  });
}

const skills = [
  { skill: "Javascript", rate: 85 },
  { skill: "Typescript", rate: 65 },
  { skill: "React", rate: 85 },
  { skill: "Recoil", rate: 60 },
];

const cooperationSkills = [
  { skill: "GIT", rate: 80 },
  { skill: "Notion", rate: 60 },
  { skill: "Redmine", rate: 70 },
  { skill: "Slack", rate: 99 },
];

skills.forEach((skill) => {
  addTechStacks({ arr: techStacks, ...skill });
});

cooperationSkills.forEach((skill) => {
  addTechStacks({ arr: cooperations, ...skill });
});
