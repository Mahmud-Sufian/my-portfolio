import React from 'react';
import './BabyProgram.css';
import Typical from 'react-typical'; 
import baby1 from '../../../images/baby/baby-1.PNG';
import baby2 from '../../../images/baby/baby-2.PNG';
import baby3 from '../../../images/baby/baby-3.PNG';
import baby4 from '../../../images/baby/baby-4.PNG';
import baby5 from '../../../images/baby/baby-5.PNG';
import baby6 from '../../../images/baby/baby-6.PNG';
import baby7 from '../../../images/baby/baby-7.PNG';
import baby8 from '../../../images/baby/baby-8.PNG';
import baby9 from '../../../images/baby/baby-9.PNG';
import baby10 from '../../../images/baby/baby-10.PNG';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
 


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
 

const BabyProgram = () => {
    return (
        <section style={{width:"100%"}} className="container mt-5 py-5">
            <hr/>
            <h1 style={{color:'salmon'}} className="text-center">
            <Typical
                steps={['Baby Program', 1000, ' ', 500]}
                loop={Infinity}
                wrapper="p"
            />
            </h1>

            <h4 className="text-center py-5">A full stack Baby-Care Program application for
                Child. <br />where they can get Baby Program according to their
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
                                    <div className="slide-img "><img className="img-thumbnail"  src={baby1} alt=""/></div> 
                                    <div className="slide-img "><img className="img-thumbnail"  src={baby2} alt=""/></div> 
                                    <div className="slide-img "><img className="img-thumbnail"  src={baby3} alt=""/></div> 
                                    <div className="slide-img "><img className="img-thumbnail"  src={baby4} alt=""/></div> 
                                    <div className="slide-img "><img className="img-thumbnail"  src={baby5} alt=""/></div> 
                                    <div className="slide-img "><img className="img-thumbnail"  src={baby6} alt=""/></div> 
                                    <div className="slide-img "><img className="img-thumbnail"  src={baby7} alt=""/></div> 
                                    <div className="slide-img "><img className="img-thumbnail" src={baby8} alt=""/></div> 
                                    <div className="slide-img "><img className="img-thumbnail"  src={baby9} alt=""/></div> 
                                    <div className="slide-img "><img className="img-thumbnail"  src={baby10} alt=""/></div> 
                            </Carousel>
                            <br/><br/>

        <div className="my-button-group container">
            <div className="text-center py-5">
                <a href="https://baby-care-program.web.app/" target="_blank" rel="noopener noreferrer"><button className="btn btn-info mr-2">Live Website</button></a>
                <a href="https://github.com/Mahmud-Sufian/baby-care-program-client" target="_blank" rel="noopener noreferrer"><button className="btn btn-info">Github</button></a>
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

export default BabyProgram;