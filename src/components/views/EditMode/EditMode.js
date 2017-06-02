import React, { Component } from 'react';
import { Col, ButtonGroup, Button, Collapse, Well } from 'react-bootstrap';
import Tile from '../Tile/Tile';
import './EditMode.css';

class EditMode extends Component {        

    render() {
        return (
            <Col xs={5} md={3}>
                <Button onClick={this.props.onClickEditButton}>
                    Editar
                </Button>

                <Collapse in={this.props.open}>
                    <Well>
                        <Button onClick={tile => this.props.onClickPaintAll(this.props.selectedTile) }>
                            Paint all
                        </Button>
                        <ButtonGroup>
                            <Button 
                                onClick={() => this.props.onClickLayer('ground')}
                                disabled={this.props.actualLayer === 'ground' ? true : false}
                            >Ground</Button>
                            <Button 
                                onClick={() => this.props.onClickLayer('layer1')}
                                disabled={this.props.actualLayer === 'layer1' ? true : false}
                            >Layer 1</Button>
                            <Button 
                                onClick={() => this.props.onClickLayer('layer2')}
                                disabled={this.props.actualLayer === 'layer2' ? true : false}
                                >Layer 2</Button>
                        </ButtonGroup>
                        <h4>Tileset</h4>
                        <div className={'tileset'}>
                            {this.props.tileset}
                        </div>
                        <p>Selected Tile: <Tile img={this.props.selectedTile} /> </p>
                    </Well>
                </Collapse>
                
            </Col>
        );
    }
}

export default EditMode;
