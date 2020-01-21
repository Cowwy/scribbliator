// =================================================
//  Storage Service
//  Provides Local Storage utilities.
//
function set( key, value ) {
    localStorage.setItem( key, JSON.stringify( value ) );
}

function get( key ) {
    return localStorage.getItem( key );
}

function clear( ) {
    localStorage.clear( );
}

function getAllKeys( appName ) {
    return Object.keys( localStorage ).filter( key => {
        return key.match( appName );
    });
}

function removeUser( user ) {
    localStorage.removeItem( user );
}

export default {
    set,
    get,
    clear,
    getAllKeys,
    removeUser
};