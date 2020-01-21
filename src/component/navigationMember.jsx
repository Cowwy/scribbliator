import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/scribbliatorLogo.png';

import $config  from '../config.json';

class NavigationBarMember extends Component {
    render( ) {
        const { appTitle } = this.props;

        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to={`${$config.homepage}`}>
                    <img className="main-logo" src={Logo} alt={`${appTitle} Homepage`}/>
                </NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`${$config.homepage}`}>My Workbench</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/setting">Settings</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/logout">Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavigationBarMember;