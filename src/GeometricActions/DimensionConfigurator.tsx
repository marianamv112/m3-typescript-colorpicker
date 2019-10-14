import React from "react";

export enum Dimension {
  width,
  heigth
}

interface ILength {
    (dimensionType: Dimension, lengthValue: number): void
}

interface DimensionProps {
  dimension: Dimension,
  length: number,
  onLengthUpdate: ILength
}


export default class DimensionConfigurator extends React.PureComponent<
  DimensionProps
> {
  constructor(props: DimensionProps) {
    super(props);
    this.lengthUpdate = this.lengthUpdate.bind(this)
  }

  lengthUpdate(event:any) {
    this.props.onLengthUpdate(this.props.dimension, event.target.value);
  }

  squareStyle = {

  }

  render() {
    return (
      <div>
        <input type="number" value={this.props.length} onChange={this.lengthUpdate}/>
        <div style={this.props.dimension === Dimension.width ? { width: this.props.length + "px" } : { height: this.props.length + "px" }} className="lengthDiv">
          <p>
            {this.props.dimension === Dimension.width
              ? "I'm a width Configurator"
              : "I'm an heigth Configurator"}
          </p>
        </div>
      </div>
    );
  }
}
