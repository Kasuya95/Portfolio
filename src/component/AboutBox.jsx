import React from "react";
import cv from "../assets/Download/CV_T.pdf"

const AboutBox = () => {
  return <section className="section" id="about">
    <div className="top-header">
      <h1>Aboutme</h1>
      <div className="row">
        {/** About me */}
        <div className="col">
        <div className="about-info">
          <h3>My Introduction</h3>
          <p></p>
          <div className="about-btn">
            <a href={cv} target="blank"><button className="btn">
          Download CV<i className="uil uil-cloud-download"></i>
        </button>
            </a>
          </div>
        </div>
        </div>
        {/** Skills */}
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>FrontEnd</h3>
            </div>
            <div className="skills-list">
              <span>vue.js</span>
              <span>figma</span>
              <span>css</span>
              <span>taliwind</span>
              <span>bootstap</span>
              <span>Html</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>FrontEnd</h3>
            </div>
            <div className="skills-list">
              <span>vue.js</span>
              <span>figma</span>
              <span>css</span>
              <span>taliwind</span>
              <span>bootstap</span>
              <span>Html</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
};
export default AboutBox;
