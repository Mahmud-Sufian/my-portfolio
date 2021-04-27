import React from 'react';

const AboutFooter = () => {
    return (
        <div className="container py-5">
            <hr/>
            <div className="row py-5">
                <div className="col-md-4 col-sm-12 pt-2">
                    <div className="border-bottom border-info h-100">
                    <h3>SKILLS</h3>
                    <h6><span style={{fontWeight:"bold"}} className="text-info">WEB</span>: HTML5, CSS3, JavaScript, ES6, React, React Router, <br/> REST API, Node.js, Express.js MongoDB</h6>
                    <h6><span style={{fontWeight:"bold"}} className="text-info">TOOLS</span>: Git, VSCode, Chrome Dev Tool, Firebase, Netlify, Heroku</h6>
                    <h6><span style={{fontWeight:"bold"}} className="text-info">DATABASE</span>: MongoDB</h6>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 pt-2">
                <div className="border-bottom border-info h-100">
                    <h3>EDUCATION</h3>
                    <h6><span style={{fontWeight:"bold"}} className="text-info">Undergraduate</span>: Bachelor of Science in Computer Science Engineering</h6>
                    <h6><span style={{fontWeight:"bold"}} className="text-info">HSC</span>:  Background: Science, Result: GPA 5.00</h6>
                    <h6><span style={{fontWeight:"bold"}} className="text-info">SSC</span>:  Background: Science, Result: GPA 5.00</h6>
                </div> 
                </div>

                <div className="col-md-4 col-sm-12 pt-2">
                    <div className="border-bottom border-info h-100">
                    <h3>PERSONAL INFORMATION</h3>
                    <h6><span style={{fontWeight:"bold"}} className="text-info">Name</span>: Mahmud Sufian</h6>
                    <h6><span style={{fontWeight:"bold"}} className="text-info">Country</span>: Bangladesh</h6>
                    <h6><span style={{fontWeight:"bold"}} className="text-info">Birth Date</span>: 2nd May 1998</h6>
                    <h6><span style={{fontWeight:"bold"}} className="text-info">Religion</span>: Muslim</h6>
                    <h6><span style={{fontWeight:"bold"}} className="text-info">Hobbies</span>: Travelling</h6>
                    <h6><span style={{fontWeight:"bold"}} className="text-info">Interest</span>: Learning, Coding</h6>
                    </div>
                </div>
            </div>
            <p className="text-center">Copyright Mahmud Sufian {(new Date()).getFullYear()} || All Right reserved</p>
        </div>
    );
};

export default AboutFooter;