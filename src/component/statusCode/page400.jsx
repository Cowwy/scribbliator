import React, {Component } from 'react';

import Footer from '../../common/footer';

class Page400 extends Component {
    state = {
        error: "",
        src: ""
    };

    toPreviousPage = ( ) => {
        this.props.history.replace( `/${this.state.src}` );
    }

    componentDidMount( ) {
        const { state } = this.props.location;
        this.setState( { ...state } );
    }

    render( ) {
        return (
            <React.Fragment>
                <h1 className="appTitle">404 Error</h1>

                <div className="row">
                    <div className="col-lg"></div>
                        <div className="col-lg-8">
                            <p className="slogan white-shadow">
                                Argh Oh!!<br/>
                                {this.state.error}<br/>
                                Please try again
                            </p>

                            <br />

                            <button 
                                className="w-50 btn btn-primary" 
                                type="submit" 
                                value="Login"
                                onClick={this.toPreviousPage}>
                                {`Back to ${this.state.src}`}
                            </button>                            
                        </div>
                    <div className="col-lg"></div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default Page400;