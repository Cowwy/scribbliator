import React, { Component } from 'react';

import GeneralInfo from "../../account/general-Info";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faCaretSquareDown, faCaretSquareUp } from '@fortawesome/free-regular-svg-icons';


class GeneralIO extends Component {
    state = {
        general : {},
        visible : true
    };


    componentDidMount( ) {
        this.setState( { general : this.resetState( ) } );
    }


    onExpandCollapse = ( ) => {
        this.setState( ( previousState ) => {
            return { visible : !previousState.visible }
        });
    }

    onSaveAndStateReset = ( ) => {
        const { onSaveHandler } = this.props;
        const { general } = this.state;

        onSaveHandler( general );

        this.setState( { general : this.resetState( ) } );
    }


    onInputChange = ( { currentTarget } ) => {
        const { id, value } = currentTarget;
        const general = { ...this.state.general };

        general[id] = value;

        this.setState( { general } );
    }

    resetState = ( ) => {
        return ( new GeneralInfo( ) ).createEmpty( );
    }


    render( ) {
        const { visible, general } = this.state;
        const { userDetail } = this.props;

        return (
            <React.Fragment>
                <div id="generalVisible" 
                    className="categoryTitle onToggle borderPopout padding-1vh" >
                    <h5 onClick={ this.onExpandCollapse }>
                        { visible 
                            ? <FontAwesomeIcon icon={faCaretSquareDown} /> 
                            : <FontAwesomeIcon icon={faCaretSquareUp} />
                        } General Info
                    </h5>

                    <span className="onSave" onClick={this.onSaveAndStateReset}>
                        <FontAwesomeIcon icon={faSave} size="2x" />
                    </span>
                </div>

                <div className={visible ? "show" : "hide"}>
                    <div className="flex-2Col borderPopout categoryField padding-1vh">
                        <label>First Name</label>
                        <input id="_firstName" type="text" 
                            placeholder={`${userDetail.getFirstName( )}`} 
                            value={ general._firstName ? general._firstName : "" }  
                            onChange={this.onInputChange} />
                        <span className="error"></span>
                    </div>

                    <div className="flex-2Col borderPopout categoryField padding-1vh">
                        <label>Last Name</label>
                        <input id="_lastName" type="text" 
                            placeholder={`${userDetail.getLastName( )}`} 
                            value={ general._lastName ? general._lastName : "" } 
                            onChange={this.onInputChange} />
                    </div>

                    <div className="flex-2Col borderPopout categoryField padding-1vh">
                        <label>Middle Name</label>
                        <input id="_middleName" type="text" 
                            placeholder={`${userDetail.getMiddleName( )}`} 
                            value={ general._middleName ? general._middleName : "" } 
                            onChange={this.onInputChange} />
                    </div>

                    <div className="flex-2Col borderPopout categoryField padding-1vh">
                        <label>Gener</label>
                        <input id="_gender" type="text" maxLength="1"
                            placeholder={`${userDetail.getGender( )}`} 
                            value={ general._gender ? general._gender : "" } 
                            onChange={this.onInputChange} />
                    </div>

                    <div className="flex-2Col categoryField padding-1vh">
                        <label>Date of Birth</label>
                        <input id="_dob" type="text" 
                            placeholder={`${userDetail.getDOB( )}`} 
                            value={ general._dob ? general._dob : "" }
                            onChange={this.onInputChange} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default GeneralIO;