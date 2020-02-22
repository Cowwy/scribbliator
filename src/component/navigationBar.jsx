import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/scribbliatorLogo.png';

import MyConfig from '../config.json';

class NavigationBar extends Component {
    render( ) {
        const { appTitle } = this.props;

        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to={`${MyConfig.homepage}`}>
                    <img className="main-logo" src={Logo} alt={`${appTitle} Homepage`}/>
                </NavLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Sign Up</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;