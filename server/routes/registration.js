const User     = require( '../models/users' );
const myJoi    = require( '../validator/joi-users' );
const myJwt    = require( '../validator/jwt-token' );

const mongoose = require( "mongoose" );
const config   = require( "config" );
const bcrypt   = require( "bcrypt" );
const express  = require( "express" );

const router   = express.Router( );
const salt     = parseInt( config.get( 'salt' ) );
const secret   = config.get( 'secret' );

// REGISTRATION ROUTE
// BASE ENDPOINT = /register
router.get( "/", ( req, res ) => {
    res.status( 200 ).send( "Why are you here?" );
});

router.post( "/", async ( req, res ) => {
    //ANY DUPLICATION?
    const { email, password : pass } = req.body;
    const duplicate = await User.find( { email } );

    if( duplicate.length >= 1 ) {
        res.status( 400 ).send( "Email Already Registered" );
        return null;
    }

    //JOI INPUT-VALIDATION (Prevent Direct Route Access)
    const error = myJoi.validate( { ...req.body } );
    if( error ) {
        res.status( 400 ).send( error );
        return null;
    }
    
    //BCRYPTE ENCRYPTION
    
    const state = { 
        email,
        password : await bcrypt.hash( pass, salt )
    };  //assume email & password is legit


    //ENTER USER INFO INTO DATABASE
    try {
        const user  = new User( { ...state } );
        const response = await user.save( );

        //CREATE JWT AND RETURN
        const token = myJwt.getToken( response._id, secret );
        res.status( 200 ).send( token );
    }
    catch( err ) {
        res.status( 400 ).send( "Server Error: Unable to Register" );
    }   
});

module.exports = router;