import React, { Component } from 'react';

class ForgetComp extends Component {
    state = {
        errors : {}
    };

    render( ) {
        const { errors, onSubmit, onChange } = this.props;
        const { email, password, newPassword } = errors;

        return( 
            <div className="row">
                <div className="col-lg"></div>
                <div className="col-lg-5">
                    <form onSubmit={onSubmit}>
                        <div className="form-group row">                                        
                            <div className="col-sm-12">
                                <input 
                                    className="form-control" 
                                    placeholder="Email Address" 
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
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    placeholder="Current Password"
                                    onChange={onChange}
                                />
                                { password && <div className="alert alert-danger text-left">{password}</div> }
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-12">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    id="newPassword" 
                                    placeholder="New Password"
                                    onChange={onChange}
                                />
                                { newPassword && <div className="alert alert-danger text-left">{newPassword}</div> }
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-12">
                                <button 
                                    className="w-100 btn btn-primary" 
                                    type="submit" 
                                    value="Reset">Reset Password
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg"></div>
            </div>
        );
    }
}

export default ForgetComp;