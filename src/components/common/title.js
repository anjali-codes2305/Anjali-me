import React from "react"
import {
  FaGithub,
  FaCodepen,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
} from "react-icons/fa"

import "./title.css"

export const Title = ({ title, social, side, height }) => {
  return (
    <div
      style={{ height }}
      className={`title ${side} ${social ? "social" : ""}`}
    >
      {social && (
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/anjali-codes2305"
            >
              <FaGithub />
            </a>
          </li>
          
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/anjali230705/"
            >
              <FaLinkedinIn />
            </a>
          </li>
          {/* <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@zonayedpca"
            >
              <FaMediumM />
            </a>
          </li> */}
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/anjali56962"
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
      )}
      <p>{title}</p>
    </div>
  )
}

Title.defaultProps = {
  side: "left",
  height: "160px",
}
