import React from 'react';

// ====================
//  ABSCTRACTION NOTE:
//  submitForm( )
//
//  customValidation( ) 
//      GOES BEYOND JOI VALIDATION, IF YOU NEED TO ACCESS DATABASE
//      TO VERIFY IF EMAIL IS TAKEN.  YOU WILL NEED TO DO THAT
//      IN THIS ABSTRACT FUNCTION.
//
//
class Form extends React.Component {
    state = {
        data   : {},
        errors : {}
    };

    //THIS METHOD VALIDATES EVERYTHING
    validate = async ( ) => {
        //CUSTOM VALIDATE AGAINST DATABASE
        //VALIDATE ALL INPUTS AS WELL
        const customError = await this.validateAgainstDB( this.state.data );  //ABSTRACTION

        //IF THERE IS NO ERRORS
        if( !customError ) return null;

        //COMPILE ERRORS
        else {
            const errors = { };

            customError.details.forEach( function( value ) {
                const { path, message } = value;
                errors[path] = message;
            });

            return errors;
        }
    }


    validateProperty = ( { id, value } ) => {
        const error = this.customValidateSingleProperty( { [id] : value } );
        return error ? error.details[0].message : null;
    }


    changeHandler = ( { currentTarget : input } ) => {
        // RETRIEVE CURRENT STATE DATA
        const errors = { ...this.state.errors };
        const data   = { ...this.state.data };

        //VALIDATE INPUT
        const errorMsg = this.validateProperty( input );  //Contains one specific message

        // CHECK FOR ERRORS
        if( errorMsg ) errors[ input.id ] = errorMsg;
        else delete errors[ input.id ];

        // TRANSFER STATE DATA
        data[input.id] = input.value;
        
        // SETSTATE FOR BOTH DATA AND ERRORS
        this.setState( { data, errors } );
        
    }


    submitHandler = async ( e ) => {
        e.preventDefault( );
        const errors = await this.validate( e );
        this.setState( { errors : errors || {} } ); //ERRORS TRUSEY OR GIVE EMPTY OBJECT

        if( errors ) return;

        this.submitForm( ); //ABSTRACTION
    }
}

export default Form;