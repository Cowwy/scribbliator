import React, { Component } from 'react';

class RegisterComp extends Component {
    render( ) {
        const { errors, onSubmit, onChange } = this.props;
        const { email, password, username } = errors;

        return( 
            <div className="row">
                <div className="col-lg"></div>
                <div className="col-lg-5">
                    <form onSubmit={onSubmit}>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <input 
                                    className="form-control" 
                                    placeholder="Username" 
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
                                    className="form-control" 
                                    placeholder="Email" 
                                    type="text" 
                                    id="email" 
                                    onChange={onChange}
                                />
                                { email && <div className="alert alert-danger text-left">{email}</div> }
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <input 
                                    className="form-control" 
                                    placeholder="Password" 
                                    type="password" 
                                    id="password" 
                                    onChange={onChange}
                                />
                                { password && <div className="alert alert-danger text-left">{password}</div> }
                            </div>
                        </div>                        

                        <div className="form-group row">
                            <div className="col-sm-12">
                                <button type="submit" className="w-100 btn btn-primary" value="Login">Sign Up</button>
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-12 text-left white-shadow">
                                By clicking Sign Up, you agree to our Terms and that you have 
                                read our Data Use Policy, including our Cookie Use.
                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-lg">
                </div>
            </div>
        );
    }
}

export default RegisterComp;