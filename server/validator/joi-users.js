const Joi = require( '@hapi/joi' );

// const validSchema = Joi.object({
//     email : Joi.string( )
//         .email( { minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ca'] } } )
//         .message( 'Must be valid email address with .com .net or .ca extension only' )
//         .required( ),

//     password: Joi.string( )
//         .pattern( new RegExp( '^[0-9a-zA-A]{6,24}$' ) )
//         .message( 'Password needs to 6-24 charactes long. Alpha & Numbers only' )
//         .required( ),
// });

const _masterSchema = {
    email : Joi.string( )
        .email( { minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ca'] } } )
        .message( 'Must be valid email address with .com .net or .ca extension only' )
        .required( ),

    password: Joi.string( )
        .pattern( new RegExp( '^[0-9a-zA-A]{6,24}$' ) )
        .message( 'Password needs to 6-24 charactes long. Alpha & Numbers only' )
        .required( ),

    newPassword: Joi.string( )
        .pattern( new RegExp( '^[0-9a-zA-A]{6,24}$' ) )
        .message( 'Password needs to 6-24 charactes long. Alpha & Numbers only' )
        .required( )
};


function _schemaSelector( schemaBlueprintObj ) {
    const newSchema = {}

    for( let key in schemaBlueprintObj ) {
        newSchema[key] = _masterSchema[key];     
    }

    return newSchema;
}


function validate( data ) {
    const schema = Joi.object( _schemaSelector( data ) );
    const { error } = schema.validate( data );
    return error ? error.details[0].message : null;
}


module.exports = {
    validate
}