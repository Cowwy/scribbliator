import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faCaretSquareDown, faCaretSquareUp } from '@fortawesome/free-regular-svg-icons';

import GeneralInfo from "../account/general-Info";
import GeneralIO from './profile/general-io';

class ProfilePage extends Component {
    // REPLACE STATIC OBJECT WITH API CALLS
    state = {
        general : new GeneralInfo( {
            _firstName : "Frankie",
            _lastName : "Law",
            _middleName : "Sai",
            _gender : "M",
            _dob : "1984-05-17"
        }),

        geographicVisible : false
    };

    onSave = ( ) => {
        console.log( "Saving Clicked" );
    }

    onSaveGeneral = ( fromIO ) => {
        const { general } = this.state;
        const result = general.clone( fromIO );

        this.setState( { general : result } );

        // console.log( this.state.general.getDOB( ) );

        //  setState( general : result )    [done]
        //  reset all input field           [done]
        //  add visual feed back            [later]
        
        //  send to database
        //      require new endpoint for user update
    }


    onCategoryToggle = ( currentTarget ) => {
        this.setState( ( previousState ) => {
            return { [currentTarget] : !previousState[currentTarget] }
        });
    }

    render( ) {
        const { general, geographicVisible } = this.state;

        return( 
            <div className="profileContainer">
                <div className="profileCase">
                    <div className="FlexLayout">
                        <div className="colA">
                            <ul className="profileA">
                                <li>General Info</li>
                                <li>Geogrphical</li>
                                <li>Medical</li>
                                <li>History</li>
                                <li>Doctor</li>
                            </ul>
                        </div>

                        <div className="colB">
                            <ul className="ul-style-none margin-all-0 mobile">
                                <li className="infoBox">
                                    <GeneralIO userDetail={general} onSaveHandler={ this.onSaveGeneral } />
                                </li>

                                <li className="infoBox">
                                    <div id="geographicVisible" 
                                        className="categoryTitle onToggle borderPopout padding-1vh">
                                       <h5 onClick={ ( ) => this.onCategoryToggle( "geographicVisible" ) }>
                                            { geographicVisible 
                                                ? <FontAwesomeIcon icon={faCaretSquareDown} /> 
                                                : <FontAwesomeIcon icon={faCaretSquareUp} />
                                            } Geographic Info
                                        </h5>

                                        <span className="onSave" onClick={this.onSave} >
                                            <FontAwesomeIcon icon={faSave} size="2x" />
                                        </span>
                                    </div>
                                </li>

                                <li className="infoBox">
                                    <div>+ Medical</div>
                                </li>

                                <li className="infoBox">
                                    <div>+ History</div>
                                </li>

                                <li className="infoBox">
                                    <div>+ Doctor</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default ProfilePage;