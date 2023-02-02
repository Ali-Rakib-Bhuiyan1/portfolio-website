import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import facebook from "../../../images/social-icons/fb.png";
import linkedIn from "../../../images/social-icons/linkedin.png";
import github from "../../../images/social-icons/github.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ow2zkio",
        "template_gvzi8om",
        form.current,
        "J_OLj4c4WunqTGuJU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    const formData = document.getElementById("form");
    formData.reset();
  };

  return (
    <div className="container-fluid p-5 mt-5 contact">
      <div className="row d-flex align-items-center py-3">
        <div className="col-md-6">
          <form ref={form} className="form ml-5" onSubmit={sendEmail} id="form">
            <input
              name="user_name"
              type="text"
              placeholder="Full-name"
              className="form-input form-control"
            />{" "}
            <br />
            <input
              className="form-input form-control"
              placeholder="Your email"
              type="email"
              name="user_email"
            />{" "}
            <br />
            <textarea
              name="message"
              type="text"
              placeholder="Your Message…"
              className="form-input-message form-control"
            ></textarea>{" "}
            <br />
            <button className="send-sms">Send Message</button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="text-right text-white">
            <p>
              <strong>Phone: </strong>01830512550
            </p>
            <p className="mt-n3">
              <strong>Email:</strong>
              <em>alirakib3963@gmail.com</em>
            </p>
            <p className="mt-n3">mirpur12</p>
            <p className="mt-n3">Dhaka,1216</p>
            <div className="social-icon ">
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
                <a target="_blank" href="https://github.com/Ali-Rakib-Bhuiyan1">
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
  );
};

export default Contact;
