import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

class Map extends Component {
    render() {
        return (   
            <Well>{this.props.map}</Well>
        );
    }
}

export default Map;
