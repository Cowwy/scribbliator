import React, { Component } from 'react';

import $config  from '../config.json';
import $appStat from '../compService/scribbliatorService';

class LogoutPage extends Component {
    componentDidMount( ) {
        $appStat.logoutUser( );
        this.props.history.replace( `${$config.homepage}` );
        window.location.reload( );
    }

    render( ) {
        return( 
            <h1>Logging Out</h1>
        );
    }
}

export default LogoutPage;