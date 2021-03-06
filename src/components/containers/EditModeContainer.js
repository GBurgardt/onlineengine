/*eslint no-restricted-globals: ["error", "event"]*/
import React, { Component } from 'react';
import  EditMode from '../views/EditMode/EditMode';
import Tile from '../views/Tile/Tile';

let tileset = require.context('../../assets/tileset', true);

class EditModeContainer extends Component {
    
    generateEditModeTileset() {
        let editModeTiles = [];
        for (let index = 0; index < tileset.keys().length - 2; index++){
            editModeTiles.push(<Tile 
                key={index} 
                class={'EditMode'}
                img={tileset(`./tile-${index}.png`)} 
                onClickTile={indexTile => this.props.onClickEditModeTile(index)}
            />)
            
        };
        return editModeTiles;
    }

    render() {
        return ( 
            <EditMode 
                actualLayer = {this.props.actualLayer}
                onClickEditButton = {this.props.onClickEditButton}
                open = { this.props.open }
                selectedTile = { this.props.selectedTile }
                tileset = {this.generateEditModeTileset()}
                onClickPaintAll = {this.props.onClickPaintAll}
                onClickLayer = {this.props.onClickLayer}
            />
        );
    }
}

export default EditModeContainer;
