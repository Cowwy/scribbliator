import React, {Component } from 'react';

import H1Title from '../common/h1Title';
import Footer from '../common/footer';

class ForgetSuccess extends Component {
    toLogin = ( ) => {
        this.props.history.replace( "/login" );
    }
    
    render( ) {
        return (
            <React.Fragment>
                <H1Title title="Reset Done!" />

                <div className="row">
                    <div className="col-lg"></div>
                        <div className="col-lg-8">
                            <p className="slogan white-shadow">
                                Your password have been successfully reset.
                            </p>

                            <br />

                            <button 
                                className="w-50 btn btn-primary" 
                                type="submit" 
                                value="Login"
                                onClick={this.toLogin}>Login Now!
                            </button>
                        </div>
                    <div className="col-lg"></div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default ForgetSuccess;