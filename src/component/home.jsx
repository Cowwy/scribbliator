import React, { Component } from 'react';

import Footer from '../common/footer';
import Splash from '../common/splash';
import H1Title from '../common/h1Title';

class Homepage extends Component {
    render( ) {        
        return( 
            <React.Fragment>
                <H1Title title="Scribbliator" />
                
                <Splash />

                <Footer /> 
            </React.Fragment>
        );
    }
}

export default Homepage;