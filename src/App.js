import React, { Component } from 'react';

import LandingPage from './comPage/landingPage';
import MemberPage from "./comPage/memberPage";

import $appState from './compService/scribbliatorService';

import './css/App.css';
import Axios from 'axios';

class App extends Component {
  state = { 
  };

  test = async ( ) => {
    const promise = await Axios.get( 'http://localhost:3000/' );

    console.log( promise );
  }

  render( ) {
    this.test( );
    
    return (
      <div className="container-fluid">
        { $appState.isUserLogin( ) 
          ?<MemberPage />
          :<LandingPage />
        }
      </div>
    );
  }
}

export default App;
