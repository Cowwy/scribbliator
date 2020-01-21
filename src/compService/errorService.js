// =================================================
//  JOI Custom Error Service
//

function createJoiError( _message, _path, _type ) {
    const customError = {
        message: _message,
        path: [_path],
        type: _type,
        context: { value : "", invalids: [""], key: _path, label: _path }
    };

    return customError;
}

export default {
    createJoiError
};