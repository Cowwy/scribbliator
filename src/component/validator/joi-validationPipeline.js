import Joi from 'joi-browser';

const _options = { abortEarly: false };

const _masterSchema = {
    email: Joi.string( )
    .email( )
    .regex( /^[\d\D][\d\D.]+@[\D]+\.(ca|com|net)$/, "email [xxx@xxx.com]" )
    .required( ),

    password : Joi.string( ).min(6).required( ),

    newPassword : Joi.string( ).min(6).required( )
};


function _schemaSelector( schemaBlueprintObj ) {
    const newSchema = {}

    for( let key in schemaBlueprintObj ) {
        newSchema[key] = _masterSchema[key];     
    }

    return newSchema;
}


function validate( data ) {
    const schema = _schemaSelector( data );
    const { error } = Joi.validate( data, schema, _options );

    return error;
}

//INPUT: ANY VALID JSON OBJECT with their key|value pair
//data = { email: "", password: "", newPassword : "" }
function validateSingleProperty( data ) {
    return validate( data );
}

export default {
    validate,
    validateSingleProperty
};