/*eslint no-restricted-globals: ["error", "event"]*/
import React, { Component } from 'react';
import Tile from '../views/Tile/Tile';
import Map from '../views/Map/Map';
import EditModeContainer from './EditModeContainer'
import { Button } from 'react-bootstrap';

let tileset = require.context('../../assets/tileset', true);

class MapContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            actualMap: this.paintAllMap(tileset('./tile-19.png'))
        };
    }

    onClickTile(indexTile) {
        let newMap = this.state.actualMap;
        newMap[indexTile] = <Tile key={indexTile} img={this.state.selectedTile} onClickTile={this.onClickTile.bind(this, indexTile)}/>;
        this.setState({
            actualMap: newMap
        })
    }

    paintAllMap(tile){
        let newMap = [];
        for (let index = 0; index < (screen.height / 32) * (screen.width / 32); index++){
            newMap.push(<Tile 
                key={index} 
                img={tile} 
                onClickTile={this.onClickTile.bind(this, index)}/>)
        };
        return newMap;
    }

    render() {
        return ( 
            <div>
                <Button onClick={ ()=> this.setState({ open: !this.state.open }) }>
                    Editar
                </Button>

                <EditModeContainer
                    open = {this.state.open}
                    onClickEditModeTile = {index => this.setState({ selectedTile: tileset(`./tile-${index}.png`) })}
                    selectedTile = {this.state.selectedTile}
                    onClickPaintAll = {() => this.setState({
                        actualMap: this.paintAllMap(this.state.selectedTile)
                    })}
                />

                <Map
                    img = {tileset('./tile-1.png')}
                    map = {this.state.actualMap}
                />
            </div>
        );
    }
}

export default MapContainer;
