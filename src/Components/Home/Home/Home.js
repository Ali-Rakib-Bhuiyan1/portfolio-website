import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <>
           <Header />
           <Skills />
           <Projects />
           <AboutMe />
           <Contact />
        </>
    );
};

export default Home;