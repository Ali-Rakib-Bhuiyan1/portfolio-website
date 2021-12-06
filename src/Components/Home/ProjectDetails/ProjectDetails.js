import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectDetails = ({ projects }) => {
    const { title, description, img, tools, live, git, features } = projects;
    // const technology = tools.item;
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className="col-md-4">
            <div data-aos="fade-up" className="project-body mt-3">
                <div className="project-card">
                    <div className="project-img">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="project-details">
                        <h4 className="font-weight-bold">{title}</h4>
                        <p className="project-description">{description}</p>
                        <ul data-aos="slide-down" className="list-inline-mb-0 tech-tools align-left">
                            {
                                tools.map(tl => <li className="list-inline-item tools">{tl.item}</li>)
                            }
                        </ul>

                    </div>
                </div>
                <div className="project-content">
                    <h4 className="ml-4">Features</h4>
                    <ul>
                        {
                            features.map(ft => <li>{ft.feature}</li>)
                        }
                    </ul>
                    <div className="links ml-4 pb-3">
                        <a target="_blank" href={live} className="live-link">Website</a>
                        <a target="_blank" href={git} className="git-link">GitHub</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectDetails;