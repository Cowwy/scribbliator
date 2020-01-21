import React from 'react';
import Joi from 'joi-browser';

import H1Title from '../common/h1Title';
import Footer from '../common/footer';
import ForgetComp from '../common/resetComp';

import $appStat from '../compService/scribbliatorService';

import Form from './form';

class ForgetForm extends Form {
    state = {
        data : { username : "", password : "" },
        errors : {}
    };

    schema = {
        username : Joi.string( ).required( ),
        password : Joi.string( ).min(6).required( )
    };

    validateCustomCheck = ( ) => {
        //CHECK IF USERNAME OR EMAIL EXIST
        return $appStat.validateUserAndEmail( this.state.data );
    }

    submitForm = ( ) => {
        $appStat.changePassword( this.state.data );
        this.props.history.replace( '/forgetSuccess' );
    }

    render( ) {
        return (
            <React.Fragment>
                <H1Title title="Password Reset" />

                <ForgetComp
                    errors={this.state.errors}
                    onSubmit={this.submitHandler}
                    onChange={this.changeHandler}
                />

                <Footer />
            </React.Fragment>
        );
    }
}

export default ForgetForm;