const jwt = require( 'jsonwebtoken' );

function getToken( id, secret ) {
    return jwt.sign( { _id: id }, secret );
}

module.exports = {
    getToken
}
