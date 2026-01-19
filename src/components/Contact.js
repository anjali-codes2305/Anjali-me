import React from "react"

import { Container, Title, Button } from "./common"

import "./contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-area">
      <Container>
        <Title side="right" title="Contact" />
        <div className="contact">
          <div className="contact-status">
            <p>
              I believe great things are built through meaningful collaboration and shared vision. If you’re looking for a driven developer who enjoys solving problems and creating user-focused solutions, I’d be excited to connect and explore possibilities together.
            </p>
            <div>
              <Button
                title="Contact Me"
                mt="25px"
                bgColor="#"
                color="#fff"
                link="mailto:anjaliagarwal230705@gmail.com"
              />
            </div>
          </div>
          <div className="contact-details">
            <ul>
              <li>
                <h5>Email</h5>
                <p>
                  anjaliagarwal230705@gmail.com <span>(Recommended)</span>
                </p>
              </li>
              
              <li>
                <h5>Social</h5>
                <p>
                  Facebook/Twitter - @anjali56962 <span>(Slow response)</span>
                </p>
              </li>
              <li>
                <h5>Address</h5>
                <p>Jaipur ,Rajasthan</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact }
