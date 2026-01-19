import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.jpg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
              Hello! I’m Anjali Agarwal, an aspiring Software Engineer and Full-Stack Developer passionate about building scalable, user-focused digital solutions. I work with Java, C++, JavaScript, and the MERN stack, transforming ideas into clean applications. I am pursuing B.Tech in Computer Science Engineering and have earned recognition as a Samsung Solve for Tomorrow 2025 Semifinalist and Top 31 finalist in Tata Innovent through hackathons, programs, and internships that strengthened leadership, problem-solving, confidence, teamwork, creativity, and real-world impact.
            </p>
            <div className="about-action">
              <Button
                link="https://github.com/anjali-codes2305/Portfolio/raw/master/src/data/file/MyResume.pdf"
                target="_blank"
                bgColor="#f7c64aff"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
