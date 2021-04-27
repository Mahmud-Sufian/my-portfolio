import React from 'react';
import './Bio.css';
import Typical from 'react-typical'; 
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook'; 
import AboutFooter from '../AboutFooter/AboutFooter';
import aboutPic from '../../../images/aboutMyPic.png';

const Bio = () => {
    return (
        <section>
            <div className="row pb-5">
                <div className="col-md-5 col-sm-12 d-flex align-self-center offset-1 py-5">
                <div>
                   <h3><span style={{color:'salmon'}} className="">Let Me Introduce....</span> <br/>I am Mahmud Sufian</h3>
                    <h2 className="highLight">
                    <Typical
                            steps={['MERN Stack Developer', 1500, 'Programmer', 1500, 'Software Engineer', 1500]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </h2>
                    <p className="pt-3" >Passionate, proficient, and hard-working web developer. Strong knowledge in responsive design with HTML5, CSS3, flexbox, Bootstrap, ES6 JavaScript. I also have solid knowledge working with React, React Router, Node Js, Express js, MongoDB, Firebase, Heroku.
                        <Typical
                            steps={['committed to make a difference', 1500, ' ', 1500, ' ', 1500]}
                            loop={Infinity}
                            wrapper="p"
                        /> 
                    </p>

                    <h5>You Can Follow Me There</h5>
                    <div className="my-icon">
                        <a href="https://www.linkedin.com/in/mahmud-sufian-60a9651b5/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ fontSize: 40, color:'#0056B3'}}/></a>
                        <a href="https://github.com/Mahmud-Sufian" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{ fontSize: 40, color:'#000'}} /></a>
                        <a href="https://www.instagram.com/mahmud_sufian_/" target="_blank" rel="noopener noreferrer"><InstagramIcon style={{ fontSize: 40, color:'tomato'}}/></a> 
                        <a href="https://www.facebook.com/odhora.alo.777/" target="_blank" rel="noopener noreferrer"><FacebookIcon style={{ fontSize: 40, color:'#24ADF3'}}/></a>
                    </div>
                   </div>
                    
                </div>
                <div className="col-md-6 col-sm-12">
                   <img style={{height:'550px', width:'550px'}} className="img-fluid" src={aboutPic} alt=""/>
                </div>
            </div>

            <AboutFooter></AboutFooter>
        </section>
    );
};

export default Bio;