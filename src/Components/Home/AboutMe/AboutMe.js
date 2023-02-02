import React from "react";

import profile from "../../../images/rakib.jpg";
import resume from "../../../images/resume.pdf";

const AboutMe = () => {
  return (
    <div className="container mb-5">
      <div className="row mt-5 py-3">
        <div className="col-md-6">
          <div className="about-body text-center">
            <h2 className="font-weight-bold">About Me</h2>
            <img className="img-fluid profile-img my-3" src={profile} alt="" />
            <div className="">
              <h2>Hi,</h2>
              <p>
                Hi, I'm K A MD ALi ,a recent graduate with a degree in ECE. I
                have a strong passion for creating beautiful and functional user
                experiences. I discovered my love for web development during my
                studies and have since honed my skills in React, HTML, CSS, and
                JavaScript. I have completed several projects that demonstrate
                my abilities. I am eager to continue learning and growing as a
                frontend developer. In my free time, you can find me
                experimenting with new technologies . Let's create something
                amazing together!"
              </p>
              <br />
              <a className="download" href={resume} download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-right mt-5">
            <img
              className="img-fluid mt-5"
              src="https://i.ibb.co/xXXSmbZ/pexels-negative-space-160107.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
