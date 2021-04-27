import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Nav from '../../Home/Nav/Nav';
import ComingBlog from '../ComingBlog/ComingBlog';

const Blogs = () => {
    return (
        <div style={{height:'100vh'}} className="main-container">
            <Nav></Nav>
            <ComingBlog></ComingBlog>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;