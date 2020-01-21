import axios from 'axios';

function get( ep ) {
    return axios.get( ep );
}

function post( ep, data ) {
    return axios.post( ep, data );
}

function put( ep, id, data ) {
    return axios.put( `${ep}/${id}`, data );
}

function del( ep, id ) {
    return axios.delete( `${ep}/${id}` );
}

export default {
    get,
    post,
    put,
    del
};