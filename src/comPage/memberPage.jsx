import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavigationBarMember from '../component/navigationMember';
import ProfilePage from '../component/profile';
import SettingPage from '../component/setting';
import ScribbliatorApp from '../component/scribbliator';

import $config from '../config.json';
import LogoutPage from '../component/logout';

class MemberPage extends Component {
    render( ) {
        return (
            <React.Fragment>
                <NavigationBarMember appTitle={`Member Area`} /> 

                <div className="row h-100">
                    <div className="col splash-screen">
                    <div className="scribbliator-homepage">
                        <Switch>
                            <Route path="/logout" component={LogoutPage} />
                            <Route path="/setting" component={SettingPage} />
                            <Route path="/profile" component={ProfilePage} />
                            <Route path={`${$config.homepage}`} component={ScribbliatorApp} />
                        </Switch>
                    </div>
                    </div>
                </div> 
            </React.Fragment>
        );
    }
}

export default MemberPage;