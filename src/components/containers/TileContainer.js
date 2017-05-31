/*eslint no-restricted-globals: ["error", "event"]*/
import React, { Component } from 'react';
import  EditMode from '../views/EditMode/EditMode';
import Tile from '../views/Tile/Tile';
import Map from '../views/Map/Map';
import EditModeContainer from './EditModeContainer'
import MapContainer from './MapContainer'
import { Button } from 'react-bootstrap';

let tileset = require.context('../../assets/tileset', true);

class TileContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            selectedTile: tileset('./tile-1.png')
        };
    }

    
    onClickEditModeTile(index) {
        this.setState({ selectedTile: tileset(`./tile-${index}.png`) })
    }


    render() {
        return ( 
            <div>
                <Button onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    Editar
                </Button>

                <EditModeContainer
                    open = {this.state.open}
                    onClickEditModeTile = {this.onClickEditModeTile.bind(this)}
                    selectedTile = {this.state.selectedTile}
                />

                <MapContainer 
                    selectedTile = {this.state.selectedTile}
                />
           
            </div>
        );
    }
}

export default TileContainer;
