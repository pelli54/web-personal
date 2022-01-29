import React from 'react';
import About from './Components/About'
import Education from './Components/Education'
import './App.css';

import {data, ContactData} from "./data"
import Foto from "./foto.png"
import SvgIcon from './Components/SvgIcon'

function App() {
  const [skills, setSkills] = React.useState(data)
  const [skill, setSkill] = React.useState({nombre:"PEDRO GUZMÁN",bg:"#4444"})
  const [tab, setTab] = React.useState("about me")

  const handleTab = (str) => {
    setTab(str) 
    setSkill({nombre:"PEDRO GUZMÁN",bg:"#4444"})
  }

  const ContactItem = ({data}) => (
    <div className="contact-container">
      <div className="icon"><SvgIcon className="img" type={data.icon} w="20"/></div>
      <div className="text text-center">{data.data}</div>
    </div>
  )

  const Contacts = () => (
    <div className="contacts">
      {
        ContactData.map((a,i) => (
          <ContactItem data={a} key={i} />
        ))
      }
    </div>
  )

  const SkillLevel = () => (
    <div className="LevelContainer">
      <div className="level" style={{width: `${skill.level??skill.level}%`}}>
        <span>{skill.level??skill.level}%</span>
      </div>
    </div>
  )

  const NameDev = () => (
    <div className="name">
      <span className="jumbo" onClick={() => setSkill({nombre:"PEDRO GUZMÁN",bg:"#4444"})}>{skill.nombre}</span>
      {(skill.nombre==="PEDRO GUZMÁN"||tab!=="skills")?<span className="sub-title bold">Web Developer</span>:<span/>}
    </div>
  )

  const SkillTabs = () => (
    <div className="skillTabs">
      <span className={`title my ${tab==="about me"?"active":""}`} onClick={() => handleTab("about me")}>About me</span>
      <span className={`title my ${tab==="education"?"active":""}`} onClick={() => handleTab("education")}>Education</span>
      <span className={`title my ${tab==="skills"?"active":""}`} onClick={() => setTab("skills")}>Skills</span>
    </div>
  )

  return (
    <div className="container">
      <div className="ball"></div>
      <div className="ball2"></div>
      <div className="page">
        <div className="sideB">
          <div className="header" style={{background:skill.bg}}>
            <div className="left">
              {skill.nombre=="PEDRO GUZMÁN"?<img src={Foto} className="img"/>:<SvgIcon type={skill.nombre} w="120" h="120" className="svgImg" onClick={() => setSkill({nombre:"PEDRO GUZMÁN",bg:"#4444"})} />}
            </div>
            <NameDev/>
            {(skill.nombre==="PEDRO GUZMÁN"||tab!=="skills")?<Contacts/>:<SkillLevel/>}
          </div>
          <div className="skills">
            <SkillTabs/>
            {tab==="skills"?(<div className="skills-container">
              {
                skills.map((a,i) => (
                  <div key={i} className="skill-container" onClick={() => setSkill(a)}>
                    <div className="iconG" >{a.nombre?<SvgIcon type={a.nombre} />:<></>}</div>
                    <div className="skill">
                      {a.nombre}    
                    </div>
                  </div>
                ))
              }
            </div>)
            :tab==="about me"?<About/>
            :tab==="education"?<Education/>
            :<></>}
          </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
