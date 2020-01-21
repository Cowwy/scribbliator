import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavigationBar from '../component/navigationBar';
import LoginForm from '../component/login';
import Homepage from '../component/home';
import RegisterForm from '../component/register';
import ForgetForm from '../component/forget';

import $config from '../config.json';
import ForgetSuccess from '../component/forgetSuccess';

class LandingPage extends Component {
    render( ) {
        return (
            <React.Fragment>
                <NavigationBar appTitle={`Scribbliator`} /> 

                <div className="row h-100">
                    <div className="col splash-screen">
                    <div className="scribbliator-homepage">
                        <Switch>
                            <Route path="/forgetSuccess" component={ForgetSuccess} />
                            <Route path="/forget" component={ForgetForm} />
                            <Route path="/register" component={RegisterForm} />
                            <Route path="/login" component={LoginForm} />
                            <Route path={`${$config.homepage}`} component={Homepage} />
                            <Redirect from="/" to={`${$config.homepage}`} />
                        </Switch>
                    </div>
                    </div>
                </div> 
            </React.Fragment>
        );
    }
}

export default LandingPage;