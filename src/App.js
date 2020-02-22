import React, { Component } from 'react';

import MainScreen from './component/switchRoutes/mainScreen';
import './css/App.css';

class App extends Component {
  state = { 
  };

  render( ) {    
    //THIS SHOULD BE DIRECTING TO MAIN SCREEN
    //OR LET THIS PAGE BE "/" HOME

    return (
      <div className="container-fluid">
        <MainScreen />
      </div>
    );
  }
}

export default App;
