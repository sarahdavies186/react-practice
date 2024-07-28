import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"

const profileData = [
  {
    skill: "Javascript",
    level: "Intermediate",
    colour: "#FF5733",
  },
  {
    skill: "HTML / CSS",
    level: "Intermediate",
    colour: "#826AF0",
  },
  {
    skill: "React",
    level: "Beginner",
    colour: "#EC6AF0",
  },
  {
    skill: "Github",
    level: "Advanced",
    colour: "#93F06A",
  },
];

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

function Avatar() {
  return(
    <img className="avatar" src="/image1.png" alt="headshot"/>
  )
}

function Intro() {
  return (
    <div>
      <h2>Sarah Davies</h2>
      <p>Front end developer. Enjoys gym, reading and watching sunsets.</p>
    </div>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      {profileData.map((profile) => (
        <Skill profileObj={profile}/>
      ))}
    </div>
  )
}

function Skill({profileObj}) {
  return (
    <div className="skill" style={{backgroundColor: profileObj.backgroundColour}}>
      <p>{profileObj.skill}</p>
      <p>{profileObj.level === 'Beginner' ? "👶" : profileObj.level === 'Intermediate' ? "👍" : "💪"}</p>
      {/* <span>{profileObj.emoji}</span> */}
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
