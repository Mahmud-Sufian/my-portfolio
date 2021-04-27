import React from 'react';

const NoMatch = () => {
    return (
        <div style={{height:'100vh'}} className="main-container">
            <div className="container">
                <h3 className="text-center text-danger pt-5">Result Not Found <br/> <small>error 404</small> </h3>
            </div>
        </div>
    );
};

export default NoMatch;