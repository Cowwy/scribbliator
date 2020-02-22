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
    function _constructor( obj ) {
        for( let key in obj ) {
            _generalDetail[key] = obj[key];
        }
    }

    //READ ONLY GETTERS
    function getFirstName( )  { return _generalDetail._firstName; }
    function getLastName( )   { return _generalDetail._lastName; }
    function getMiddleName( ) { return _generalDetail._middleName; }
    function getGender( )     { return _generalDetail._gender; }
    function getDOB( )        {
        const { _dob } = _generalDetail;
        const _mm = _dob.getMonth( ) + 1;
        const _dd = _dob.getDay( );
        const _yy = _dob.getFullYear( );

        return `${_mm}/${_dd}/${_yy}`;
    }
    
    //DEBUG ONLY
    function _debug( ) { return JSON.stringify( _generalDetail ); }

    return {
        getFirstName,
        getLastName,
        getMiddleName,
        getGender,
        getDOB,
        _debug
    };
}

export default GeneralInfo;