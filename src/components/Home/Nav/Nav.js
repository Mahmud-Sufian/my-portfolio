import React from "react"; 
import { Link } from "react-router-dom";
import './Nav.css';
 

const Nav = () => {
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
    <a className="navbar-brand" to="/">
        <h4><span className="logo-color">Mahmud Sufian</span>  <br/> <span className="logo-size pl-5">MERN Stack Developer</span></h4>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link text-secondary" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/project">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog Posts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
        <a href="https://drive.google.com/file/d/1Xxx5Bd5jtGgoqKNDS2SPZD1q_-qGB1Bm/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-info">Resume</button></a>
        </li>
         
      </ul>
       
    </div>
  </nav>
    </div>
  );
};

export default Nav;
