import React, { Component } from 'react';
import Tile from '../views/Tile/Tile';
import Map from '../views/Map/Map';
import EditModeContainer from './EditModeContainer'
import { Button, Row } from 'react-bootstrap';
import constants from '../../utils/Constants';

let tileset = require.context('../../assets/tileset', true);

class MapContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            actualLayer: 'ground',
            ground: this.paintAllMap(tileset(constants.emptyTile)),
            layer1: this.paintAllMap(tileset(constants.emptyTile)),
        };
    }

    onClickLayer(selectedLayer){
        this.setState({
            actualLayer: selectedLayer
        })
    }

    onClickTile(indexTile) {  
        console.log('onClickTile');
        let newLayerMap = this.state[this.state.actualLayer];          
        newLayerMap[indexTile] = <Tile key={indexTile} img={this.state.selectedTile} onClickTile={this.onClickTile.bind(this, indexTile)}/>;
        this.setLayer(this.state.actualLayer, newLayerMap);
    }

    setLayer(layer, layerMap){
        if (layer === 'ground'){
            this.setState({
                ground: layerMap
            })
        } else {
            this.setState({
                layer1: layerMap
            })
        }
    }

    paintAllMap(tile){
        let newMap = [];
        for (let index = 0; index < constants.maxTiles; index++){
            newMap.push(<Tile 
                key={index} 
                img={tile} 
                onClickTile={this.onClickTile.bind(this, index)}/>)
        };
        return newMap;
    }

    render() {
        return ( 
            <Row>
                <EditModeContainer
                    actualLayer = {this.state.actualLayer}
                    onClickEditButton = {()=> this.setState({ open: !this.state.open }) }
                    open = {this.state.open}
                    onClickEditModeTile = {index => this.setState({ selectedTile: tileset(`./tile-${index}.png`) })}
                    selectedTile = {this.state.selectedTile}
                    onClickPaintAll = {() => this.setState({
                        ground: this.paintAllMap(this.state.selectedTile)
                    })}
                    onClickLayer = {selectedLayer => this.setState({
                        actualLayer: selectedLayer
                    })}
                />

                <Map
                    img = {tileset('./tile-1.png')}
                    ground = {this.state.ground}
                    layer1 = {this.state.layer1}
                />
            </Row>
        );
    }
}

export default MapContainer;
