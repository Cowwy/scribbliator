const express = require( "express" );
const router  = express.Router( );

const User = require( '../models/users' );

router.get( "/", ( req, res ) => {
    console.log( "main route /" );
});


//ROUTE 
router.get( '/isEmailTaken', async ( req, res ) => {
    const { email } = req.query;

    const response = await User.find( { email } );

    response.length === 0 
        ? res.send( true ) 
        : res.send( false );
});


router.get( '/isEmailValid', async( req, res ) => {
    
});

module.exports = router;