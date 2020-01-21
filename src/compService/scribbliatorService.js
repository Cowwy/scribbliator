import $config  from '../config';
import $encode  from './encryptionService';
import $storage from './storageService';
import $joiErr  from './errorService';

// =================================================
//  Scribbliator Service
//  Application specific details.
//     Local Storage Key    => createKey( data )
//     Local Storage Record => createData( data )
//
function createKey( _data ) {
    const { username } = _data;
    const { appName, version } = $config;
    return `${appName}-${version}-${username}`;
}

function createRecord( _data ) {
    const { email, username, password } = _data;
    const date = new Date( );
    const yy = date.getFullYear( );
    const dd = date.getDate( );
    const mm = date.getMonth( ) + 1;

    if( _checkDuplicateUsername( username ).length >= 1 ) {
        return new Error( "Duplicate Username" );
    }

    return {
        username       : username,
        password       : $encode.EncryptBasic( password ),
        email          : email,
        'date-created' : `${yy}-${mm}-${dd}`
    };
}

//CHECK IF USERNAME IS ALREADY TAKEN
//IF SO RETURN THE KEY
function _checkDuplicateUsername( _username ) {
    if( _username === "" ) { return null; }
    
    const keys = $storage.getAllKeys( "Scribbliator" );

    return keys.filter( key => {
        return JSON.parse( $storage.get( key ) ).username === _username;
    });
}

//CHECK IF EMAIL IS ALREADY TAKEN
//IF SO RETURN THE KEY
function _checkDuplicateEmail( _email ) {
    if( _email === "" ) { return null; }

    const keys = $storage.getAllKeys( "Scribbliator" );

    return keys.filter( key => {
        return JSON.parse( $storage.get( key ) ).email === _email;
    });
}

function _getUserKey( _data ) {
    const { username } = _data;
    const userKey  = _checkDuplicateUsername( username );
    const emailKey = _checkDuplicateEmail( username );
    const key      = userKey.length === 1 ? userKey : emailKey;

    return key;
}

function validateDuplicateUsername( _data ) {
    const { username } = _data;
    const userList  = _checkDuplicateUsername( username );

    const customError = 
        $joiErr.createJoiError( 
            `Duplicate username ${username} found.`,
            "username",
            "username duplicate" 
        );
    
    if( !userList || userList.length === 0 ) { 
        return;
    } else {
        return customError;
    }
}

function validateDuplicateEmail( _data ) {
    const { email } = _data;
    const userList = _checkDuplicateEmail( email );

    const customError = 
        $joiErr.createJoiError( 
            `Duplicate email ${email} found.`,
            "email",
            "email duplicate" 
        );

    if( !userList || userList.length === 0 ) { 
        return;
    } else {
        return customError;
    }
}

function validateCredential( _data ) {
    const { password : _password } = _data;
    const key = _getUserKey( _data );

    const emailError = 
        $joiErr.createJoiError( 
            `Username or Email address not found`,
            "username",
            "Username or Email Address not found" 
        );

    const passError = 
        $joiErr.createJoiError(
            `Invalid email and password`,
            `password`,
            `Invalid email and password`
        );

    if( key.length ) {
        const { password } = JSON.parse( $storage.get( key ) );
        const decryptPass = $encode.DecryptBasic( password );

        return ( decryptPass === _password ) ? null : passError;

    } else {
        return emailError;
    }
}

function validateUserAndEmail( _data ) {
    const { username : email } = _data;
    const userKey  = validateDuplicateUsername( { username : email } ) || null;
    const emailKey = validateDuplicateEmail( { email } ) || null;

    const error = 
        $joiErr.createJoiError( 
            `Username or Email address not found`,
            "username",
            "Username or Email Address not found" 
        );

    if( userKey == null && emailKey == null ) {
        return error;

    } else {
        return null;
    }
}

//Check if there is a <userToken> registered in local storage.
function isUserLogin( ) {
    return $storage.get( "userToken" ) ? true : false;
}

//Set userToken
function setUserLogin( _data ) {
    //THIS DOESN'T INCLUDE USERNAME, ONLY EMAIL
    $storage.set('userToken', _getUserKey( _data ) );
}

//Log out user by removing local storage credentials.
function logoutUser( ) {
    $storage.removeUser( "userToken" );
}

function changePassword( _data ) {
    const { password } = _data;
    const key          = _getUserKey( _data );
    const userObj      = JSON.parse( $storage.get( key ) );

    userObj.password = $encode.EncryptBasic( password );

    $storage.set( key, userObj );
}



export default {
    createKey,                      //REGISTER || LOGIN
    createRecord,                   //REGISTER
    validateDuplicateUsername,      //REGISTER
    validateDuplicateEmail,         //REGISTER
    validateUserAndEmail,           //FORGET PASSWORD
    validateCredential,             //LOGIN
    isUserLogin,                    //LOGIN
    setUserLogin,                   //LOGIN
    logoutUser,                     //MEMBER AREA
    changePassword                  //FORGET PASSWORD
};