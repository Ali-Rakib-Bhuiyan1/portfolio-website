import React, { useEffect } from "react";

import travel from "../../images/projects/travel.png";
import ProjectPageDetails from "../ProjectPageDetails/ProjectPageDetails";
import jewlry from "../../images/projects/jewlry.png";
import helth from "../../images/projects/helth.png";

import Aos from "aos";
import "aos/dist/aos.css";

const allProjectData = [
  {
    id: 1,
    title: "jewelry nice",
    description: "A full-stack volunteer Service web application",
    img: jewlry,
    tools: [
      {
        item: "React",
      },
      {
        item: "Node.js",
      },
      {
        item: "MongoDB",
      },
      {
        item: "Bootstrap",
      },
      {
        item: "Materiul Ui",
      },
      {
        item: "HTML",
      },
      {
        item: "Css",
      },
    ],
    features: [
      {
        feature:
          "Login system with firebase, private routes and dashboard for admins and users .",
      },
      {
        feature:
          "Users can order services, monitor their orderlist and give a review, delete or update the review.",
      },
      {
        feature: "Admin can add services, update and delete services",
      },
      {
        feature: "Firebase authentication.",
      },
    ],
    live: "https://e-commerce-2f3c1.web.app/",
    git: "https://github.com/Ali-Rakib-Bhuiyan1/v-project",
  },

  {
    id: 2,
    title: "Trvel agency",
    description: "A travel booking web application",
    img: travel,
    tools: [
      {
        item: "React",
      },

      {
        item: "Bootstrap",
      },
      {
        item: "HTML",
      },
      {
        item: "Css",
      },
    ],
    features: [
      {
        feature: "Clickable travel place card to book hotels.",
      },
      {
        feature: "Booking Form.",
      },
      {
        feature: "Login with Email and Password.",
      },
      {
        feature: "Firebase authentication.",
      },
    ],
    live: "https://travel-agency-47ec3.web.app/",
    git: "https://travel-agency-47ec3.web.app/",
  },
  {
    id: 3,
    title: "Health-car",
    description: "A HelthCare Service",
    img: helth,

    tools: [
      {
        item: "React",
      },
      {
        item: "Bootstrap",
      },
      {
        item: "HTML",
      },
      {
        item: "Css",
      },
    ],
    features: [
      {
        feature: "Online appointment making ",
      },
      {
        feature: "All doctors list",
      },
    ],
    live: "https://health-care-hospital.web.app/",
    git: "https://github.com/Ali-Rakib-Bhuiyan1/helth-care",
  },
];

const ProjectPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container-fluid px-5 mt-n4 pb-5">
      <h2 className="text-brand mb-5">
        <u>Projects done by me</u>
      </h2>
      <div className="row">
        {allProjectData.map((pr) => (
          <ProjectPageDetails data-aos="fade-up" key={pr.id} projects={pr} />
        ))}
      </div>
      <div className="text-center py-4 explore"></div>
    </div>
  );
};

export default ProjectPage;
