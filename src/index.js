import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="💪" background="blue" />
      <Skill skill="Web Design" emoji="💪" background="green" />
      <Skill skill="Git and GitHub" emoji="💪" background="orangered" />
      <Skill skill="JavaScript" emoji="💪" background="yellow" />
      <Skill skill="React" emoji="💪" background="skyBlue" />
      <Skill skill="TypeScript" emoji="👶" background="orange" />
    </div>
  );
}

function Skill(props) {
  const style = {
    backgroundColor: props.background,
  };
  return (
    <div className="skill" style={style}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

// function SkillList() {
//   return (
//     <list className="skill-list">
//       <HtmlCss skill="HTML+CSS" background="blue" />
//       <JavaScript skill="JavaScript" background="yellow" />
//       <WebDesign skill="Web Design" background="green" />
//       <GitAndGitHub skill="Git and GitHub" background="red" />
//       <React skill="React" background="skyBlue" />
//       <TypeScript skill="TypeScript" background="orange" />
//     </list>
//   );
// }

// function HtmlCss(props) {
//   const style = {
//     backgroundColor: props.background,
//   };
//   return (
//     <p className="skill" style={style}>
//       {props.skill + " 💪"}
//     </p>
//   );
// }
// function JavaScript(props) {
//   const style = {
//     backgroundColor: props.background,
//   };
//   return (
//     <p className="skill" style={style}>
//       {props.skill + " 💪"}
//     </p>
//   );
// }

// function WebDesign(props) {
//   const style = {
//     backgroundColor: props.background,
//   };
//   return (
//     <p className="skill" style={style}>
//       {props.skill + " 💪"}
//     </p>
//   );
// }

// function GitAndGitHub(props) {
//   const style = {
//     backgroundColor: props.background,
//   };
//   return (
//     <p className="skill" style={style}>
//       {props.skill + " 👍"}
//     </p>
//   );
// }

// function React(props) {
//   const style = {
//     backgroundColor: props.background,
//   };
//   return (
//     <p className="skill" style={style}>
//       {props.skill + " 💪"}
//     </p>
//   );
// }

// function TypeScript(props) {
//   const style = {
//     backgroundColor: props.background,
//   };
//   return (
//     <p className="skill" style={style}>
//       {props.skill + " 👶"}
//     </p>
//   );
// }

function Avatar() {
  return <img className="avatar" src="Zarko-Avatar.jpg" />;
}

function Intro() {
  return (
    <div>
      <h1>Žarko Dukić</h1>
      <article>
        Front-end Developer and Sensei at Decisive Strike Gym Sports Club. When
        not coding or preparing a training, I like to play with my home and
        stray cats, enjoy walking in nature with my girlfriend and watching
        Nikola Jokić and Denver Nuggets in the NBA.
      </article>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
