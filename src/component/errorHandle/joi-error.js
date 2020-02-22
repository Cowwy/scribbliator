//====================================================
// CUSTOM JOI-BROWSER ERROR
//====================================================
// _message     The error message you want to display.
// _path        The label in which you want your message to appear.
// _type        Data type this error is dealing with.
//
function _createJoiError( _message, _path, _type ) {
    const customError = {
        message: _message,
        path: [_path],
        type: _type,
        context: { value : "", invalids: [""], key: _path, label: _path }
    };

    return customError;
}


const emailTakenMsg = _createJoiError( 
    `Email address taken`, "email", "String" 
);

const emailNotFound = _createJoiError( 
    `Email address not found`, "email", "String"
);

const serverError = _createJoiError(
    `Hm... cannot reach server.  Please try again.`, "email", "String"
);


export default {
    emailTakenMsg,
    emailNotFound,
    serverError
}