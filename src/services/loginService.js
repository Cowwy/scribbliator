//Check if there is a <userToken> registered in local storage.
function isUserLogin( ) {
    return localStorage.getItem( "userToken" ) ? true : false;
}

//Log out user by removing local storage credentials.
function logoutUser( ) {
    localStorage.removeItem( "userToken" );
}

export default {
    isUserLogin,                    //LOGIN
    logoutUser,                     //MEMBER AREA
};