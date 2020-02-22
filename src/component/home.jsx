import React, { Component } from 'react';

import Footer from '../common/footer';

class Homepage extends Component {
    render( ) {        
        return( 
            <React.Fragment>
                <h1 className="appTitle">Scribbliator</h1>
                
                <div className="row">
                    <div className="col-lg"></div>
                    <div className="col-lg-8">
                        <p className="slogan white-shadow">
                            100% Privacy with Web Notebook.<br/>
                            Local friendly notebook organizer
                        </p>
                    </div>
                    <div className="col-lg"></div>
                </div>

                <Footer /> 
            </React.Fragment>
        );
    }
}

export default Homepage;