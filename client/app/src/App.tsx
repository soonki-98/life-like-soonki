/* This is imported components of dev-portfolio library */
import styled from "styled-components";
import "./App.css";
import { Header, Intro, TechStack, Experience, Project, TechTalk, Contact } from "./component";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <TechStack />
      <Experience />
      <Project />
      <TechTalk />
      <Line />
      <Contact />
    </div>
  );
}

export default App;

const Line = styled.hr`
  margin: 0 30px;
  margin-top: 3em;
  color: #fff;
`;
