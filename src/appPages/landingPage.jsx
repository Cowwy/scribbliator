import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavigationBar      from '../component/navigationBar';
import LoginForm          from '../component/login';
import Homepage           from '../component/home';
import RegisterForm       from '../component/register';
import ForgetForm         from '../component/forget';
import RegisterSuccess200 from '../component/statusCode/registerSuccess200';
import Page400            from '../component/statusCode/page400';

import MyConfig      from '../config.json';
import ForgetSuccess from '../component/forgetSuccess';

class LandingPage extends Component {
    render( ) {
        const { auth } = this.props;

        return (
            <React.Fragment>
                <NavigationBar appTitle={`Scribbliator`} /> 

                <div className="row h-100">
                    <div className="col splash-screen">
                        <div className="scribbliator-homepage">
                            <Switch>
                                <Route path="/success"       render={ ( props ) => <RegisterSuccess200 onAuth={auth} {...props} /> } />
                                <Route path="/400"           component={Page400} />
                                <Route path="/forgetSuccess" component={ForgetSuccess} />
                                <Route path="/forget"        component={ForgetForm} />
                                <Route path="/register"      component={RegisterForm} />
                                <Route path="/login"         render={ ( props ) => <LoginForm onAuth={auth} { ...props }/> } />
                                <Route path={`${MyConfig.homepage}`} component={Homepage} />
                                <Redirect from="/" to={`${MyConfig.homepage}`} />
                            </Switch>
                        </div>
                    </div>
                </div> 
            </React.Fragment>
        );
    }
}

export default LandingPage;