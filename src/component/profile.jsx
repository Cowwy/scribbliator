import React, { Component } from 'react';
import GeneralInfo from "../account/general-Info";

class ProfilePage extends Component {
    // REPLACE STATIC OBJECT WITH API CALLS
    state = {
        general : new GeneralInfo( {
            _firstName : "Frankie",
            _lastName : "Law",
            _middleName : "Sai",
            _gender : "M",
            _dob : new Date( 'May 17 1984' )
        })
    };


    render( ) {
        const { general } = this.state;

        console.log( general.getDOB( ) );

        return( 
            <div className="profileContainer">
                <label>{ general.getFirstName( ) }</label>
                <label>{ general.getLastName( ) }</label>
                <label>{ general.getMiddleName( ) }</label>
                <label>{ general.getGender( ) }</label>
                <label>{ general.getDOB( ) }</label>
            </div>
        );
    }
}

export default ProfilePage;