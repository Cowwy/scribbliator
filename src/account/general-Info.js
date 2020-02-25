function GeneralInfo( obj = {} ) {

    const _generalDetail = {
        _firstName  : "",
        _lastName   : "",
        _middleName : "",
        _gender     : "",
        _dob        : ""
    };

    _constructor( obj );

    //CREATE LOCAL COPY OF THE ACCOUNT FROM OUTSIDE SOURCE
    //API || MANUAL || DB
    //  -> APPLY ENCRYPTION
    function _constructor( obj ) {
        for( let key in obj ) {
            _generalDetail[key] = obj[key];
        }
    }

    //OBJECT STATE SPECIFIC
    //READ ONLY GETTERS
    function getFirstName( )  { return _generalDetail._firstName; }
    function getLastName( )   { return _generalDetail._lastName; }
    function getMiddleName( ) { return _generalDetail._middleName; }
    function getGender( )     { return _generalDetail._gender; }
    // function getDOB( )        {
    //     const { _dob } = _generalDetail;
    //     const _yy = _dob.getFullYear( );
    //     let   _mm = _dob.getMonth( ) + 1;
    //     let   _dd = _dob.getDate( );

    //     _mm = ("" + _mm).length === 1 ? "0" + _mm : _mm;
    //     _dd = ("" + _dd).length === 1 ? "0" + _dd : _dd;

    //     return `${_yy}-${_mm}-${_dd}`;
    // }
    function getDOB( ) { return _generalDetail._dob; }
    

    //COMMON FUNCTION
    function createEmpty( ) { 
        const clone = { };
        for( let key in _generalDetail ) { clone[key] = ""; }
        return clone;
    }
    
    function clone( userInput ) {
        const newUserProfile = {};

        for( let key in _generalDetail )  {

            if( userInput[key] ) {
                newUserProfile[key] = userInput[key];
            } else {
                newUserProfile[key] = _generalDetail[key];
            }
        }

        return new GeneralInfo( newUserProfile );
    }


    //UTILITY FUNCTION
    function _formatDate( defaultDate ) {
        const yy = defaultDate.getFullYear( );
        const mm = defaultDate.getMonth( );
        const dd = defaultDate.getDate( );

        console.log( yy, mm, dd );
    }


    //DEBUG ONLY
    // function _debug( ) { return JSON.stringify( _generalDetail ); }

    return {
        getFirstName,
        getLastName,
        getMiddleName,
        getGender,
        getDOB,
        createEmpty,
        clone,
        // _debug
    };
}

export default GeneralInfo;