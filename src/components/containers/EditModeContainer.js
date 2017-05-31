/*eslint no-restricted-globals: ["error", "event"]*/
import React, { Component } from 'react';
import  EditMode from '../views/EditMode/EditMode';
import Tile from '../views/Tile/Tile';
import Map from '../views/Map/Map';

let tileset = require.context('../../assets/tileset', true);

class EditModeContainer extends Component {
    
    generateEditModeTileset() {
        let editModeTiles = [];
        for (let index = 0; index < tileset.keys().length - 1; index++){
            editModeTiles.push(<Tile 
                key={index} 
                class={'EditMode'}
                img={tileset(`./tile-${index}.png`)} 
                onClickTile={indexTile => this.props.onClickEditModeTile(index)}
            />)
            
        };
        return editModeTiles;
    }

    onClickPaintAll(tile){
        let newTiles = [];
        for (let index = 0; index < (screen.height / 32) * (screen.width / 32); index++){
            newTiles.push(<Tile 
                key={index} 
                img={tile} 
                onClickTile={this.onClickTile.bind(this, index)}
                />)
            
        };
        this.setState({
            tiles: newTiles
        });
    }

    render() {
        return ( 
            <div>
                <EditMode 
                    open = { this.props.open }
                    selectedTile = { this.props.selectedTile }
                    tileset = {this.generateEditModeTileset()}
                    onClickPaintAll = {this.onClickPaintAll.bind(this)}
                />
            </div>
        );
    }
}

export default EditModeContainer;
