import React from 'react';
import Joi from 'joi-browser';

// ====================
//  ABSCTRACTION NOTE:
//  submitForm( )
//  customValidation( )
//
//  YOU WILL NEED TO WRITE YOUR OWN 
//  IF YOU ARE EXTEND FROM THIS CLASS.
//
//
class Form extends React.Component {
    state = {
        data   : {},
        errors : {}
    };
 
    //THIS METHOD VALIDATES EVERYTHING
    //EITHER THERE IS 1 ERROR OR NO ERROR
    validate = ( e ) => {
        //VALIDATE ALL INPUT
        const options   = { abortEarly: false };
        let { error } = Joi.validate( this.state.data, this.schema, options );

        const customError = this.validateCustomCheck( );        //ABSTRACTION


        // CHECK FOR CUSTOMIZED ERRORS
        if( customError && !error ) {
            error = {};
            error.details = [customError];
        }
        
        if( !error ) return null;
        else {
            let errors = {};

            for( let item of error.details ) {
                const path = item.path;
                const msg  = item.message;

                errors[path] = msg;
            }

            return errors;
        }
    }


    validateProperty = ( { id, value } ) => {
        const field  = { [id] : value };
        const schema = { [id] : this.schema[id] };
        const { error } = Joi.validate( field, schema );

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

    submitHandler = ( e ) => {
        e.preventDefault( );
        const errors = this.validate( e );
        this.setState( { errors : errors || {} } ); //ERRORS TRUSEY OR GIVE EMPTY OBJECT

        if( errors ) return;

        this.submitForm( ); //ABSTRACTION
    }
}

export default Form;