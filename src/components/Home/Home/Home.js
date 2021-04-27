import React from 'react';
import './Home.css';
import Nav from '../Nav/Nav';
import SomeDetail from '../SomeDetail/SomeDetail';
import SendMessage from '../SendMessage/SendMessage';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="main-container">
            <Nav></Nav>
            <SomeDetail></SomeDetail>
            <SendMessage></SendMessage>
            <Footer></Footer>
        </div>
    );
};

export default Home;