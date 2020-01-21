import React from 'react';
import Joi from 'joi-browser';

import H1Title from '../common/h1Title';
import LoginComp from '../common/loginComp';
import Footer from '../common/footer';
import Form from  './form';

import $appStat from '../compService/scribbliatorService';
import $config  from '../config.json';

class LoginForm extends Form {
    state = {
        data : { username : "", password : "" },
        errors : {}
    };

    schema = {
        username : Joi.string( ).required( ),
        password : Joi.string( ).min(6).required( )
    };

    submitForm = ( ) => {
        $appStat.setUserLogin( this.state.data );
        this.props.history.replace( `${$config.homepage}` );
        window.location.reload( );
    }

    validateCustomCheck = ( ) => {
        //CHECK USERNAME AND PASSWORD HERE
        //IF FAILED RETURN A CUSTOM ERROR HERE
        const error = $appStat.validateCredential( this.state.data );

        return error;
    }

    render( ) {
        return(
            <React.Fragment>
                <H1Title title="Login" />

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