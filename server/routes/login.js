const User     = require( '../models/users' );
const myJoi    = require( '../validator/joi-users' );
const myJwt    = require( '../validator/jwt-token' );

const config   = require( "config" );
const bcrypt   = require( "bcrypt" );
const express  = require( "express" );

const router   = express.Router( );
const secret   = config.get( "secret" );

// REGISTRATION ROUTE
// BASE ENDPOINT = /login
router.get( "/", ( req, res ) => {
    res.status( 200 ).send( "Why are you here?" );
});


router.post( "/", async ( req, res) => {
    //validate email and password
    const error = myJoi.validate( { ...req.body.params } );
    if( error ) {
        res.status( 400 ).send( error );
        return null;
    }

    //find email from database
    const { email : _userEmail, password : _userPass } = req.body.params;
    const dbFindResult = await User.find( { email : _userEmail } );

    if( dbFindResult.length === 0 ) {
        res.status( 400 ).send( "Username or Email not found" );
        return null;
    }

    //compare password with hash
    const { _id, password : hash } = dbFindResult[0];
    bcrypt.compare( _userPass, hash, function( err, match ) {
        if( match ) {
            const token = myJwt.getToken( _id, secret );
            res.status( 200 ).send( token );
        } else {
            res.status( 400 ).send( "Username and Password don't match" );
        }
    });
    
});


module.exports = router;