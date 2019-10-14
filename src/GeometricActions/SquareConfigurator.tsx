import React, { Component } from "react";
import DimensionConfigurator from "./DimensionConfigurator";

enum Dimension {width, heigth};

export default class SquareConfigurator extends Component {
    
  render() {
    return (
      <div>
        <p>Hello I'm a square configurator</p>
        <DimensionConfigurator dimension={Dimension.heigth}/>
        <DimensionConfigurator dimension={Dimension.width}/>
      </div>
    );
  }
}
