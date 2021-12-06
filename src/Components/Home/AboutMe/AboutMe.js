import React from 'react';
import aboutMe from '../../../images/about1.png';
import profile from '../../../images/profile1.jpg';
import resume from '../../../images/resume.pdf';

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
                            <p>I am K A Md ALi . I am a front-end web developer. I don't like to define myself by the work i have done. I want to define myself by the work i want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself and do interesting things that matters. <br/> I love to design along with development. Eventually, I decided that it would be a fun challenge to try designing and building my own.</p><br/>
                            <a className="download" href={resume} download>Download Resume</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text-right mt-5">
                        <img className="img-fluid mt-5" src={aboutMe} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;