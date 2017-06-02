import './Tile.css';
import React, { Component } from 'react';

class Tile extends Component {

    render() {
        return (
            <img 
                className={this.props.class || 'Tile'} 
                src={this.props.img} 
                onClick={e => {
                    e.preventDefault();
                    this.props.onClickTile(this.props.key);
                    }} 
                onDragEnter={e => {
                    e.preventDefault();
                    this.props.onClickTile(this.props.key);
                    }}
                alt={''}/>
        );
    }
}

export default Tile;
