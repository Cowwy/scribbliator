import React from 'react';
import axios from 'axios';

import LoginComp from '../common/loginComp';
import Footer    from '../common/footer';
import Form      from './form';

import MyConfig  from '../config.json';
import MyJoi     from './validator/joi-validationPipeline';


class LoginForm extends Form {
    state = {
        data : { email : "", password : "" },
        errors : {}
    };


    //VALIDATE IF EMAIL EXIST IN THE DATABASE
    validateAgainstDB = async ( data ) => {
        return MyJoi.validate( data );
    }


    //CUSTOM VALIDATE PROPERTY
    // input = { [id] : value } from 'form.jsx'
    customValidateSingleProperty = ( data ) => {
       return MyJoi.validateSingleProperty( data );
    }


    submitForm = async ( ) => {
        try {
            const { onAuth : updateAuthentication } = this.props;

            const { data } = await axios.post( `${MyConfig.endpoint}/login`, {
                params : { ...this.state.data }
            } );

            localStorage.setItem( "userToken", data );
            updateAuthentication( );
            
            this.props.history.replace( { pathname: "/scribbliator", state:{ test : "My name is Frankie" } } );
        } 
        
        catch( err ) {
            const { data } = err.response;           

            //redirect user to page400 with reason
            this.props.history.replace( {
                pathname: '/400',
                state: { 
                    error: data,
                    src: 'Login'
                }
            } );
        }
    }


    render( ) {
        return(
            <React.Fragment>
                <h1 className="appTitle">Login</h1>

                <LoginComp 
                    errors={this.state.errors}
                    onSubmit={this.submitHandler}
                    onChange={this.changeHandler}
                />

                <Footer /> 
            </React.Fragment>
        );
    }
}

export default LoginForm;