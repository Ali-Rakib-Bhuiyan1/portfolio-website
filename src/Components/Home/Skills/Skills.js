import React from 'react';
import react from '../../../images/icons/react.png';
import es6 from '../../../images/icons/es6.png';
import js from '../../../images/icons/js.png';
import node from '../../../images/icons/node.png';
import mongo from '../../../images/icons/mongodb.png';
import bootstrap from '../../../images/icons/bootstrap.png';
import html from '../../../images/icons/html.png';
import css from '../../../images/icons/css.png';
import SkillDetails from '../SkillDetails/SkillDetails';

    const skillData = [
        {
            id:"1",
            img: react,
            title: "React.js"
        },
        {
            id:"2",
            img: es6,
            title: "Es6"
        },
        {
            id:"3",
            img: js,
            title: "JavasCript"
        },
        {
            id:"4",
            img: node,
            title: "Node.js"
        },
        {
            id:"5",
            img: mongo,
            title: "MongoDB"
        },
        {
            id:"6",
            img: bootstrap,
            title: "Bootstrap"
        },
        {
            id:"7",
            img: html,
            title: "HTML"
        },
        {
            id:"8",
            img: css,
            title: "CSS"
        },
    ];
const Skills = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center text-brand"><u>Key Skills</u></h2>
            <div className="row">
                {
                    skillData.map(skl => <SkillDetails key={skl.id} skills={skl} />)
                }
            </div>
        </div>
    );
};

export default Skills;