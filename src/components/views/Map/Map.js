import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Map extends Component {
    render() {
        
        const wellStyle = {
            position: 'relative'
        }

        const layerStyle = {
            position: 'absolute',
        };

        return (   
            <Col style={wellStyle} xs={13} md={9}>
                <div style={layerStyle}>
                    {this.props.ground}
                </div>
                <div style={layerStyle} >
                    {this.props.layer1}
                </div>
            </Col>
        );
    }
}

export default Map;
