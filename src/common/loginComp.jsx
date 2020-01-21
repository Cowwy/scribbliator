import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginComp extends Component {
    state = {
        errors : {}
    };

    render( ) {
        const { errors, onSubmit, onChange } = this.props;
        const { username, password } = errors;

        return( 
            <div className="row">
                <div className="col-lg"></div>
                <div className="col-lg-5">
                    <form onSubmit={onSubmit}>
                        <div className="form-group row">                                        
                            <div className="col-sm-12">
                                <input 
                                    className="form-control" 
                                    placeholder="Username or Email Address" 
                                    type="text" 
                                    id="username" 
                                    onChange={onChange}
                                />
                                { username && <div className="alert alert-danger text-left">{username}</div> }
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    placeholder="Password"
                                    onChange={onChange}
                                />
                                { password && <div className="alert alert-danger text-left">{password}</div> }
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-12">
                                <button 
                                    className="w-100 btn btn-primary" 
                                    type="submit" 
                                    value="Login">Login
                                </button>
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-12 white-shadow">
                                <Link to="/forget">Forgot Password?</Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg"></div>
            </div>
        );
    }
}

export default LoginComp;