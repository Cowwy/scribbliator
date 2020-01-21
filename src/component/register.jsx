import React        from 'react';
import Joi          from 'joi-browser';

import H1Title      from '../common/h1Title';
import RegisterComp from '../common/registerComp';
import Footer       from '../common/footer';
import Form         from './form';

import $storage     from '../compService/storageService';
import $appState    from '../compService/scribbliatorService';
import $config      from '../config.json';

class RegisterForm extends Form {
    state = {
        data : { email : "", username : "", password : "" },
        errors : {}
    };

    schema = {
        email    : Joi.string( ).email( ).required( ),
        username : Joi.string( ).regex(/^[a-zA-Z]+$/).required( ),
        password : Joi.string( ).min(6).required( )
    };

    validateCustomCheck = ( ) => {
        return $appState.validateDuplicateEmail( this.state.data ) 
            || $appState.validateDuplicateUsername( this.state.data );
    }

    submitForm = async ( ) => {
        //Local Storage Key -> <scribbliator-<version>-<username>
        const recordID = $appState.createKey( this.state.data );

        //Local Storage Data -> Data
        const recordData = $appState.createRecord( this.state.data );
        
        //setItem into localStorage
        $storage.set( recordID, recordData );
        $storage.set( "userToken", recordID );
        
        this.props.history.replace( `${$config.homepage}` );
        window.location.reload( );
    }

    render( ) {
        return( 
            <React.Fragment>
                <H1Title title="Sign Up" />

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