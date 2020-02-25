import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavigationBarMember from '../component/navigationMember';
import ProfilePage from '../component/profile';
import SettingPage from '../component/setting';
import ScribbliatorApp from '../component/scribbliator';

import MyConfig   from '../config.json';
import LogoutPage from '../component/logout';

class MemberPage extends Component {
    render( ) {
        const { auth } = this.props;

        return (
            <React.Fragment>
                <NavigationBarMember appTitle={`Member Area`} /> 

                <div className="row h-100">
                    <div className="col">
                        <div className="scribbliator-memberpage">
                            <Switch>
                                <Route path="/logout" render={ ( props ) => <LogoutPage onAuth={auth} {...props} /> } />
                                <Route path="/setting" component={SettingPage} />
                                <Route path="/profile" component={ProfilePage} />
                                <Route path={`${MyConfig.homepage}`} component={ScribbliatorApp} />
                            </Switch>
                        </div>
                    </div>
                </div> 
            </React.Fragment>
        );
    }
}

export default MemberPage;