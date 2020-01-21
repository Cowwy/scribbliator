const MongoClient = require( 'mongodb' ).MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'Scribbliator';
let   db;

MongoClient.connect( url, { useNewUrlParser: true }, ( err, client ) => {
    if( err ) return console.log( err );

    db = client.db( dbName );
    console.log( `Connected MongoDB: ${url}` );
    console.log( `Database: ${dbName}` );
});