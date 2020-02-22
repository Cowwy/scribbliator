import React        from 'react';
import axios        from "axios";

import RegisterComp from '../common/registerComp';
import Footer       from '../common/footer';
import Form         from './form';

import MyConfig     from '../config.json';
import MyJoi        from './validator/joi-validationPipeline';


class RegisterForm extends Form {
    state = {
        data : { email : "", password : "" },
        errors : {}
    };

    //THIS IS WHERE YOU WILL WRITE THE DATABASE AXIOS CALL
    //CHECK IF EMAIL IS TAKEN
    validateAgainstDB = async ( data ) => {
        return MyJoi.validate( data );
    }

    customValidateSingleProperty = ( data ) => {
        return MyJoi.validateSingleProperty( data );
    }

    //SUBMIT FORM WILL ADD USER TO DATABASE
    submitForm = async ( ) => {
        try {
            const { status, data } = await axios.post( `${MyConfig.endpoint}/register`, { ...this.state.data } )            

            if( status === 200 ) {    
                this.props.history.replace( "/success" );
                localStorage.setItem( "userToken", data );
            }
        }
        
        catch( err ) {
            const { data } = err.response;

            this.props.history.replace( {
                pathname: '/400',
                state: { 
                    error: data,
                    src: 'Register'
                }
            } );
        }
    }

    render( ) {
        return( 
            <React.Fragment>
                <h1 className="appTitle">Sign Up</h1>

                <RegisterComp 
                    errors={this.state.errors}
                    onSubmit={this.submitHandler}
                    onChange={this.changeHandler}
                />

                <Footer />
            </React.Fragment>
        );
    }
}

export default RegisterForm;