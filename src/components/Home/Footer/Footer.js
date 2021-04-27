import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
 

const Footer = () => {

    return (
        <div className="container"> 
        <hr/>
            <div className="row">
                <div className="col-md-3 col-sm-12 pl-5">
                   <h5>Address</h5>
                   <p style={{color:'#046164'}}> House No: 13/1,Block: A, <br/> Ashrafia Madrasah Road. <br/> Notun Bazar, Vatara, Dhaka.</p> 
                   <p style={{color:'#046164'}}>Phone: +880 1615588565</p>
                </div>
                
                <div className="col-md-3 col-sm-12 pl-1 ml-0">
                    <ul className="footer-list">
                        <h5>Pages</h5>
                        <li><Link to="/">Home</Link></li> 
                        <li><Link to="/project">Projects</Link></li> 
                        <li><Link to="/blog">Blogs</Link></li> 
                        <li><Link to="/about">About</Link></li> 
                    </ul>
                </div>

                <div className="col-md-3 col-sm-12 pl-1 ml-0">
                    <ul className="footer-list">
                        <h5>More</h5>
                        <li><Link to="/about">Personal Information</Link></li> 
                        <li><Link to="/about">My Skills</Link></li> 
                        <li><Link to="/blog">Blogs</Link></li> 
                        <li><Link to="/about">About</Link></li> 
                    </ul>
                </div>

                <div className="col-md-3 col-sm-12 pl-5">
                    <h5>Links</h5>
                    <div className="my-icon">
                        <a href="https://www.linkedin.com/in/mahmud-sufian-60a9651b5/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{ fontSize: 40, color:'#0056B3'}}/></a>
                        <a href="https://github.com/Mahmud-Sufian" target="_blank" rel="noopener noreferrer"><GitHubIcon style={{ fontSize: 40, color:'#000'}} /></a>
                        <a href="https://www.instagram.com/mahmud_sufian_/" target="_blank" rel="noopener noreferrer"><InstagramIcon style={{ fontSize: 40, color:'tomato'}}/></a> 
                        <a href="https://www.facebook.com/odhora.alo.777/" target="_blank" rel="noopener noreferrer"><FacebookIcon style={{ fontSize: 40, color:'#24ADF3'}}/></a>
                    </div>
                </div>
            </div>
            <div className="py-5">
            <p className="text-center ml-0">Copyright Mahmud Sufian {(new Date()).getFullYear()} || All Right Reserved</p>
            </div>
        </div>
    );
};

export default Footer;