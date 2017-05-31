import './Tile.css';
import React, { Component } from 'react';

class Tile extends Component {

    render() {
        return (
            <img className={this.props.class || 'Tile'} src={this.props.img} onClick={this.props.onClickTile}/>
        );
    }
}

export default Tile;
