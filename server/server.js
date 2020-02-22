//IMPORTS
const config        = require( "config" );
const express       = require( 'express' );
const mongoose      = require( 'mongoose' );
const cors          = require( 'cors' );

const setting       = require( '../src/config.json' );

const mainRoute     = require( './routes/mainRoute' );
const registerRoute = require( './routes/registration' );
const loginRoute    = require( './routes/login' );
const forgetRoute   = require( './routes/forget' );


//INITIALIZATION
const app  = express( );
const PORT = process.env.PORT || setting.port;


//INITIAL CHECK ON ENVIRONMENT VARIABLE SETTING
if( !config.get( 'secret') ) {
    console.error( 'FATAL ERROR: secret is not defined.' );
    process.exit( 1 );
}

if( !config.get( 'salt' ) ) {
    console.error( 'FATAL ERROR: salt is not defined.' );
    process.exit( 1 );
}


//MONGOOSE SETUP & CONNECTIVITY
const db = setting.db;

mongoose.set( 'useFindAndModify', false );
mongoose.set( 'useNewUrlParser', true );
mongoose.set( 'useUnifiedTopology', true );

mongoose.connect( `mongodb://localhost:27017/${db}` )
    .then( function( ) {
        console.log( "====================================================" );
        console.log( `  Connected to MongoDB - [Collection ${db}]  ` );
        console.log( "====================================================" );
    })
    .catch( function( err ) {
        console.log( "Cannot connect to MongoDB...", err );
    });


//MIDDLEWARES
app.use( cors( ) );
app.use( express.json( ) );
app.use( "/", mainRoute );
app.use( "/register", registerRoute );
app.use( "/login", loginRoute );
app.use( "/forget", forgetRoute );


//START SERVER
app.listen( PORT, ( ) => {
    console.log( `Server started at port: ${PORT}` );
});