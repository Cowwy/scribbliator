import React, { Component } from 'react';

import MyConfig     from '../config.json';
import LoginService from '../services/loginService';

class LogoutPage extends Component {
    componentDidMount( ) {
        const { onAuth : updateAuthentication } = this.props;

        LoginService.logoutUser( );
        updateAuthentication( );

        this.props.history.replace( `${MyConfig.homepage}` );
    }

    render( ) {
        return( 
            <h1>Logging Out</h1>
        );
    }
}

export default LogoutPage;