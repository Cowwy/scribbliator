// =================================================
//  Encryption Service
//  Encode password specifically locally providing
//    small degree of protection.
//
function EncryptBasic( value ) {
    let output = "";

    for( let i = 0; i < value.length; i++ ) {
        output += String.fromCharCode(value.charCodeAt(i) + 5);
    }

      return output;
}

function DecryptBasic( value ) {
    let output = "";

    for( let i = 0; i < value.length; i++ ) {
        output += String.fromCharCode(value.charCodeAt(i) - 5);
    }
    return output;
}


export default {
    EncryptBasic,
    DecryptBasic
};
