import React from 'react';

import Car from '../../../images/projects/Car.png'
import travel from '../../../images/projects/travel.png'
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import { Link } from 'react-router-dom';

const projectData = [
   
    {
        id: 1,
        title: "Aments Car",
        description: "A full-stack volunteer Service web application",
        img: Car,
        tools: [
            {
                item: "React"
            },
            {
                item: "Node.js"
            },
            {
                item: "MongoDB"
            },
            {
                item: "Bootstrap"
            },
            {
                item: "Materiul Ui"
            },
            {
                item: "HTML"
            },
            {
                item: "Css"
            }
        ],
        features: [
           
            {
                feature: "Login system with firebase, private routes and dashboard for admins and users ."
            },
            {
                feature: "Users can order services, monitor their orderlist and give a review, delete or update the review."
            },
            {
                feature: "Admin can add services, update and delete services"
            },
            {
                feature: "Firebase authentication."
            }
        ],
        live: "https://carshop-cb120.web.app",
        git: "https://github.com/Ali-Rakib-Bhuiyan1/Aments-Client"
    },
   
    {
        id: 2,
        title: "Trvel agency",
        description: "A travel booking web application",
        img: travel,
        tools: [
            {
                item: "React"
            },
          
            {
                item: "Bootstrap"
            },
            {
                item: "HTML"
            },
            {
                item: "Css"
            }
        ],
        features: [
            {
                feature: "Clickable travel place card to book hotels."
            },
            {
                feature: "Booking Form."
            },
            {
                feature: "Login with Email and Password."
            },
            {
                feature: "Firebase authentication."
            }
        ],
        live: "https://travel-agency-fc58b.web.app/",
        git: "https://github.com/Ali-Rakib-Bhuiyan1/travel-agency"
    },
   {
    id: 3,
    title: "Health-car",
    description: "A HelthCare Service",
  
    tools: [
        {
            item: "React"
        },
        {
            item: "Bootstrap"
        },
        {
            item: "HTML"
        },
        {
            item: "Css"
        }
    ],
    features: [
        {
            feature: "Online appointment making "
        },
        {
            feature: "All doctors list"
        },
      
    ],
    live: "https://health-care-hospital.web.app/",
    git: "https://github.com/Ali-Rakib-Bhuiyan1/helth-care"
},

        
];

const Projects = () => {
    return (
        <div className="container-fluid px-5 pt-1 pb-5">
            <h2 className="text-brand mb-5"><u>Some of My Projects</u></h2>
            <div className="row">
               {
                   projectData.map(pr => <ProjectDetails key={pr.id} projects={pr} />)
               }
            </div>
            <div className="text-center py-4 explore mt-5">
            <Link to="/projects" className="explore-btn">Explore More</Link>
            </div>
        </div>
    );
};

export default Projects;