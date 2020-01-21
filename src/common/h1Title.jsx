import React, { Component } from 'react';

class H1Title extends Component {
    render( ) {
        const { title } = this.props;

        return( 
            <h1 className="appTitle">{title}</h1>
        );
    }
}

export default H1Title;