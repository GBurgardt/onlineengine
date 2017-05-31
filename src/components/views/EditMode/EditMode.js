import React, { Component } from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';
import Tile from '../Tile/Tile';

class EditMode extends Component {
    render() {
        return (
            <div>
                
                <Collapse in={this.props.open}>
                    <Well>
                        <h4>Tileset</h4>
                        {this.props.tileset}
                        <p>Selected Tile: <Tile img={this.props.selectedTile} /> </p>
                        <Button onClick={tile => this.props.onClickPaintAll(this.props.selectedTile) }>
                            Pintar todo
                        </Button>
                    </Well>
                </Collapse>
                
            </div>
        );
    }
}

export default EditMode;
