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
                <div className="profileCase">
                    <div className="FlexLayout">
                        <div className="colA">
                            <ul className="profileCategoryList">
                                <li>General Info</li>
                                <li>Geogrphical</li>
                                <li>Medical</li>
                                <li>History</li>
                                <li>Doctor</li>
                            </ul>
                        </div>

                        <div className="colB">
                            <ul className="profileCategoryList">
                                <li>General Info</li>
                                <li>Geogrphical</li>
                                <li>Medical</li>
                                <li>History</li>
                                <li>Doctor</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default ProfilePage;