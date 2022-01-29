import React from 'react'

export default function SideB(){
	<div className="sideB">
        <div className="header">
          <div className="name">
            <span className="jumbo" onClick={() => setSkill("PEDRO GUZMÁN")}>{skill}</span>
            <span className="sub-title bold">Web Developer</span>
          </div>
          <div className="contacts">
            <div className="contact-container">
              <div className="icon"></div>
              <div className="text text-center">Caracas, Venezuela</div>
            </div>
            <div className="contact-container">
              <div className="icon"></div>
              <div className="text text-center">+58 416 316 6051</div>
            </div>
            <div className="contact-container">
              <div className="icon"></div>
              <div className="text text-center">Pedro.emiliogl54@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="skills">
          <span className="title my">Skills</span>
          <div className="skills-container">
            {
              skills.map((a,i) => (
                <div key={i} className="skill-container" onClick={() => setSkill(a)}>
                  <div className="iconG"></div>
                  <div className="skill ">
                    {a}    
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
}