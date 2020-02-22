import React, {Component } from 'react';

import Footer from '../../common/footer';

class RegisterSuccess200 extends Component {
    state = {
        curTimer : 5,
        maxTimer : 5000,
        elapseTimer : setInterval( ( ) => { this.setState( { curTimer : this.state.curTimer - 1 } ) }, 1000 )
    };

    updateAuthentication = ( ) => {
        const { onAuth : updateAuthentication } = this.props;
        updateAuthentication( );
        this.props.history.replace( "/scribbliator" );
    }

    toWorkench = ( ) => {
        this.updateAuthentication( );
    }

    componentDidMount( ) {
        setTimeout( this.updateAuthentication, this.state.maxTimer );
    }

    componentWillUnmount( ) {
        clearInterval( this.state.elapseTimer );
    }

    render( ) {
        return (
            <React.Fragment>
                <h1 className="appTitle">Registration Complete</h1>

                <div className="row">
                    <div className="col-lg"></div>
                        <div className="col-lg-8">
                            <p className="slogan white-shadow">
                                Congratulation, your registration is complete. :D<br/>
                                {`You will be redirected to your workbench in ${this.state.curTimer} Seconds`}
                            </p>

                            <br />

                            <button 
                                className="w-50 btn btn-primary" 
                                type="submit" 
                                value="Login"
                                onClick={this.toWorkench}>
                                    Go to Workbench!
                            </button>
                        </div>
                    <div className="col-lg"></div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default RegisterSuccess200;