import React from 'react';
import './SomeDetail.css';
import myPic from '../../../images/zihad-crop.png';
import Typical from 'react-typical';

const SomeDetail = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 col-sm-12 offset-1">
                    <img style={{height:'500px'}} className="img-fluid" src={myPic} alt=""/>
                </div>
                <div className="col-md-6 col-sm-12 d-flex align-self-center py-5">
                   <div className="pt-5">
                   <h3><span className="highLight"> Hi, I am </span> <br/> Mahmud Sufian</h3>
                    <h2 className="highLight">
                    <Typical
                            steps={['MERN Stack Developer', 1500, 'Programmer', 1500, 'Software Engineer', 1500]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </h2>
                    <p >Passionate, proficient, and hard-working web developer. Strong knowledge in responsive design with HTML5, CSS3, flexbox, Bootstrap, ES6 JavaScript. I also have solid knowledge working with React, React Router, Node Js, Express js, MongoDB, Firebase, Heroku. committed to make a difference</p>
                    
                    <div className="btn-group py-5"> 
                    <a href="https://drive.google.com/uc?export=download&id=1Xxx5Bd5jtGgoqKNDS2SPZD1q_-qGB1Bm" target="_blank" rel="noopener noreferrer"><button className="btn btn-info">Download Resume</button></a>
                    </div> 
                    
                   </div>
                </div>
            </div>
        </div>
    );
};

export default SomeDetail;