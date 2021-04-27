import React from 'react';
import Typical from 'react-typical';  
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import riders1 from '../../../images/riders/riders-1.PNG';
import riders2 from '../../../images/riders/riders-2.PNG';
import riders3 from '../../../images/riders/riders-3.PNG';
 


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


const FastRiders = () => {
    return (
        <section style={{width:"100%"}} className="container mt-5 py-5">
            <hr/>
        <h1 style={{color:'salmon'}} className="text-center">
        <Typical
            steps={['Fast Riders', 1000, ' ', 500]}
            loop={Infinity}
            wrapper="p"
        />
        </h1>

        <h4 className="text-center py-5">Fast Riders application for
            Social People. <br />where they can get Any Ride according to their
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
                                <div className="slide-img "><img className="img-thumbnail"  src={riders1} alt=""/></div> 
                                <div className="slide-img "><img className="img-thumbnail"  src={riders2} alt=""/></div> 
                                <div className="slide-img "><img className="img-thumbnail"  src={riders3} alt=""/></div>  
                        </Carousel>
                        <br/><br/>

    <div className="my-button-group container">
        <div className="text-center py-5">
            <a href="https://fast-riders-8f74f.web.app/" target="_blank" rel="noopener noreferrer"><button className="btn btn-info mr-2">Live Website</button></a>
            <a href="https://github.com/Mahmud-Sufian/fast-riders" target="_blank" rel="noopener noreferrer"><button className="btn btn-info">Github</button></a>
        </div>
    
        <h1 className="text-center">||<small>Technology</small>||</h1>
        <div className="text-center">
        <button type="button" className="btn btn-outline-info m-2">React.js</button>
        <button type="button" className="btn btn-outline-info m-2">React Router</button>
        <button type="button" className="btn btn-outline-info m-2">Javascript</button> 
        <button type="button" className="btn btn-outline-info m-2">Firebase Authentication</button>
         
        </div>
    </div>
    
    </section>
    );
};

export default FastRiders;