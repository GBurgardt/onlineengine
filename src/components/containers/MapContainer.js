/*eslint no-restricted-globals: ["error", "event"]*/
import React, { Component } from 'react';
import  EditMode from '../views/EditMode/EditMode';
import Tile from '../views/Tile/Tile';
import Map from '../views/Map/Map';
import EditModeContainer from './EditModeContainer'
import { Button } from 'react-bootstrap';

let tileset = require.context('../../assets/tileset', true);

class MapContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            tiles: this.generateEmptyTiles()
        };
    }

    onClickTile(indexTile) {
        let newTiles = this.state.tiles;
        newTiles[indexTile] = <Tile key={indexTile} img={this.props.selectedTile} onClickTile={this.onClickTile.bind(this, indexTile)}/>;
        this.setState({
            tiles: newTiles
        })
    }

    generateEmptyTiles() {
        let emptyTiles = [];
        for (let index = 0; index < (screen.height / 32) * (screen.width / 32); index++){
            emptyTiles.push(<Tile 
                key={index} 
                img={tileset('./tile-0.png')} 
                onClickTile={this.onClickTile.bind(this, index)}/>)
        };
        return emptyTiles;
    }

    render() {
        return ( 
            <div>
                <Map
                    img = {tileset('./tile-1.png')}
                    tiles = {this.state.tiles}
                />
            </div>
        );
    }
}

export default MapContainer;
