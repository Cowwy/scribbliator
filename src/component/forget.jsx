import React from 'react';
import axios from 'axios';

import MyJoi   from './validator/joi-validationPipeline';
import MyConfig   from '../config.json';

import Footer from '../common/footer';
import ForgetComp from '../common/resetComp';


import Form from './form';

class ForgetForm extends Form {
    state = {
        data : { email : "", password : "", newPassword : "" },
        errors : {}
    };

    validateAgainstDB = async ( ) => {
        //VALIDATE ALL INPUT
        return MyJoi.validate( this.state.data );
    }

    customValidateSingleProperty = ( data ) => {
        return MyJoi.validateSingleProperty( data );
    }

    submitForm = async ( ) => {
        //SEND DATA TO ROUTE /forget
        try {
            await axios.post( `${MyConfig.endpoint}/forget`, { ...this.state.data } );
            this.props.history.replace( '/forgetSuccess' );
        }
        catch( err ) {
            const { data } = err.response;

            this.props.history.replace( {
                pathname: '/400',
                state: { 
                    error: data,
                    src: 'Forget'
                }
            } );
        }
    }

    render( ) {
        return (
            <React.Fragment>
                <h1 className="appTitle">Password Reset</h1>

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