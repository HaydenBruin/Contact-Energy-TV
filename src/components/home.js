import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div className="home">
                <div className="column">
                    <h1>412 Sign ups</h1>
                </div>   
                <div className="column">
                    <img src="/media/newzealand.png" alt="map of new zealand" /> 
                </div>
            </div>
        );
    }
}

export default Home