import React from "react";

import profile from "../../images/rakib.jpg";
import resume from "../../images/resume.pdf";
import facebook from "../../images/social-icons/fb.png";
import linkedIn from "../../images/social-icons/linkedin.png";
import github from "../../images/social-icons/github.png";

const AboutMePage = () => {
  return (
    <div className="container mb-5">
      <h2 className="text-brand mb-5 about-text mt-4">
        <u>About Me</u>
      </h2>
      <div className="row mt-5 py-3">
        <div className="col-md-6 about-me py-5">
          <div className="about-body text-center">
            <img className="img-fluid profile-img my-3" src={profile} alt="" />
            <div className="about-me">
              <h2>Hi,</h2>
              <p>
                Hi, I'm K A MD ALi, a recent graduate with a degree in ECE. I
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
        <div className="col-md-6 address">
          <div className="text-right mt-5">
            <div className="text-end text-white address-text pr-3">
              <p>
                <strong>Phone: </strong>01830512550
              </p>
              <p className="mt-n3">
                <strong>Email:</strong>
                <em> alirakib3963@gmail.com</em>
              </p>
              <p className="mt-n3">
                <strong>GitHub:</strong>
                <em> https://github.com/Ali-Rakib-Bhuiyan1</em>
              </p>
              <p className="mt-n3">mirpur-12</p>
              <p className="mt-n3">Dhaka-1216</p>
              <div className="social-icon mr-1">
                <ul className="list-inline-mb-0">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100008043798188"
                  >
                    <li className="list-inline-item">
                      <img src={facebook} alt="" />
                    </li>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/ali-bhuiyan-1bb228203/"
                  >
                    <li className="list-inline-item">
                      <img src={linkedIn} alt="" />
                    </li>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/Ali-Rakib-Bhuiyan1"
                  >
                    <li className="list-inline-item">
                      <img src={github} alt="" />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
