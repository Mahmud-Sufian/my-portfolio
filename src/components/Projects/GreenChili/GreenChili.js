import React from 'react';
import Typical from 'react-typical';  
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import green1 from '../../../images/greenChili/green-1.PNG';
import green2 from '../../../images/greenChili/green-2.PNG';
import green3 from '../../../images/greenChili/green-3.PNG';
import green4 from '../../../images/greenChili/green-4.PNG';
 


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


const GreenChili = () => {
    return (
        <section style={{width:"100%"}} className="container mt-5 py-5">
            <hr/>
        <h1 style={{color:'salmon'}} className="text-center">
        <Typical
            steps={['Green Chili Restaurant', 1000, ' ', 500]}
            loop={Infinity}
            wrapper="p"
        />
        </h1>

        <h4 className="text-center py-5">A full stack Green Chili Restaurant application for
            Social People. <br />where they can get Food according to their
            choice.
        </h4>

                        <Carousel 
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true} 
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container" 
                            dotListClass="custom-dot-list-style"
                            
                            >
                                <div className="slide-img "><img className="img-thumbnail"  src={green1} alt=""/></div> 
                                <div className="slide-img "><img className="img-thumbnail"  src={green2} alt=""/></div> 
                                <div className="slide-img "><img className="img-thumbnail"  src={green3} alt=""/></div> 
                                <div className="slide-img "><img className="img-thumbnail"  src={green4} alt=""/></div>  
                        </Carousel>
                        <br/><br/>

    <div className="my-button-group container">
        <div className="text-center py-5">
            <a href="https://green-chilis-client.web.app/" target="_blank" rel="noopener noreferrer"><button className="btn btn-info mr-2">Live Website</button></a>
            <a href="https://github.com/Mahmud-Sufian/green-chilis-client" target="_blank" rel="noopener noreferrer"><button className="btn btn-info">Github</button></a>
        </div>
    
        <h1 className="text-center">||<small>Technology</small>||</h1>
        <div className="text-center">
        <button type="button" className="btn btn-outline-info m-2">React.js</button>
        <button type="button" className="btn btn-outline-info m-2">React Router</button>
        <button type="button" className="btn btn-outline-info m-2">Javascript</button>
        <button type="button" className="btn btn-outline-info m-2">Node.js</button>
        <button type="button" className="btn btn-outline-info m-2">Express.js</button>
        <button type="button" className="btn btn-outline-info m-2">Firebase Authentication</button>
        <button type="button" className="btn btn-outline-info m-2">MongoDb</button>
        <button type="button" className="btn btn-outline-info m-2">Heroku</button>
        </div>
    </div>
    
    </section>
    );
};

export default GreenChili;