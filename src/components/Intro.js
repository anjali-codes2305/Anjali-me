import React from "react"

import { Container, Title, Button } from "./common"

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
            <p>Hello! I am</p>
            <h1>Anjali Agarwal</h1>
            <h2>Software Engineer</h2>
            <ul>
              <li>Problem Solver</li>
              <li>Confident Speaker</li>
              <li>Critical Thinker</li>
            </ul>
            <div className="action">
              <Button
                link="https://github.com/anjali-codes2305/Portfolio/raw/master/src/data/file/MyResume.pdf"
                target="__blank"
                bgColor="#f7c64aff"
                title="Get Resume"
              />
              <Button clickEvent link="#about" ml="15px" title="About Me" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }
