const User     = require( '../models/users' );
const myJoi    = require( '../validator/joi-users' );
const myJwt    = require( '../validator/jwt-token' );

const config   = require( "config" );
const bcrypt   = require( "bcrypt" );
const express  = require( "express" );

const router   = express.Router( );
const salt     = parseInt( config.get( 'salt' ) );
const secret   = config.get( "secret" );

// REGISTRATION ROUTE
// BASE ENDPOINT = /forget
router.get( "/", ( req, res ) => {
    res.status( 200 ).send( "Forgot something?" );
});


router.post( "/", async ( req, res ) => {
    //VALIDATE INPUT FIELDS
    const error = myJoi.validate( { ...req.body } );
    if( error ) {
        res.status( 400 ).send( error );
        return null;
    }
    
    //FIND EMAIL FROM DATABASE
    const { 
        email       : _userEmail,
        password    : _userPass,
        newPassword : _newPass
    } = req.body;
    const dbFindResult = await User.find( { email : _userEmail } );

    if( dbFindResult.length === 0 ) {
        res.status( 400 ).send( "Username and Password don't match" );
        return null;
    }

    //COMPARE PASSWORD HASH & GET NEW HASH
    const { _id, password : hash } = dbFindResult[0];
    const match = await bcrypt.compare( _userPass, hash );
    const newHash = match 
        ? await bcrypt.hash( _newPass, salt ) 
        : res.status( 400 ).send( "Username and Password don't match" );

    //FIND AND UPDATE MONGODB
    const user = await User.findById( { _id } ); 
    user.set( { password : newHash } );  

    const result = await user.save( );
    
    res.status( 200 ).send( true );
});


module.exports = router;