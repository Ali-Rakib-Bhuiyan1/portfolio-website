import React from 'react';

const SkillDetails = ({ skills }) => {

    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="skill-icon text-center bg-white m-3 shadow py-5 px-3">
                <img className="img-fluid" src={skills.img} alt="" />
                <h3>{skills.title}</h3>
            </div>
        </div>
    );
};

export default SkillDetails;