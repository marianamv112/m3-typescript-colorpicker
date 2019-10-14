import React, { Component } from "react";
import DimensionConfigurator from "./DimensionConfigurator";

enum Dimension {width, heigth};

interface SquareProps {}

interface DimensionState {
    width: number, 
    heigth: number
}

export default class SquareConfigurator extends React.PureComponent<SquareProps, DimensionState> {
    constructor(props: SquareProps) {
        super(props);
        this.state = {
            width: 100,
            heigth: 100
        }
        this.onLengthChange = this.onLengthChange.bind(this);
    }

    onLengthChange(dimensionType: Dimension, lengthValue: number) {
       
        switch (dimensionType) {
            case Dimension.width:
                this.setState({width: lengthValue})
                break;
            
            case Dimension.heigth:
                this.setState({heigth: lengthValue})
                    break;
            default:
                break;
        }
        
    }

  render() {
    return (
      <div>
        <p>Hello I'm a square configurator</p>
        <DimensionConfigurator dimension={Dimension.heigth} length={this.state.heigth} onLengthUpdate={this.onLengthChange} />
        <DimensionConfigurator dimension={Dimension.width} length={this.state.width} onLengthUpdate={this.onLengthChange} />      </div>
    );
  }
}
