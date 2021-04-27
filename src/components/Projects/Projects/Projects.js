import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Nav from '../../Home/Nav/Nav';
import BabyProgram from '../BabyProgram/BabyProgram'; 
import FastRiders from '../FastRiders/FastRiders';
import GreenChili from '../GreenChili/GreenChili';
import Grocery from '../Grocery/Grocery';
import Volunteer from '../Volunteer/Volunteer';
import './Projects.css';

const Projects = () => {
    return (
        <div className="main-container">
             <Nav></Nav>
             <BabyProgram></BabyProgram>
             <Grocery></Grocery>
             <GreenChili></GreenChili>
             <FastRiders></FastRiders>
             <Volunteer></Volunteer>
             <Footer></Footer>
        </div>
    );
};

export default Projects;