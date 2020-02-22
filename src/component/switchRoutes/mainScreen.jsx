import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginService from '../../services/loginService';
import LandingPage  from '../../appPages/landingPage';
import MemberPage   from '../../appPages/memberPage';


//THIS COMPONENT NEEDS TO CONTROL THE MAIN ROUTE ONLY
class MainScreen extends Component {
    state = {
        isUserLogin : false
    };

    //CHANGE LOGIN STATE
    onAuthentication = ( ) => {
        this.setState( { isUserLogin : LoginService.isUserLogin( ) } );
    }

    componentDidMount( ) {
        //CHECK INITIAL LOGIN STATE
        this.setState( { isUserLogin : LoginService.isUserLogin( ) } );
    }

    render( ) {
        return (
            <React.Fragment>
                <Switch>
                    { this.state.isUserLogin 
                        ? <Route path="/" render={ ( props ) => <MemberPage auth={this.onAuthentication} {...props} /> } />
                        : <Route path="/" render={ ( props ) => <LandingPage auth={this.onAuthentication} {...props} /> } />
                    }
                </Switch>
            </React.Fragment>
        );
    }
}

export default MainScreen;