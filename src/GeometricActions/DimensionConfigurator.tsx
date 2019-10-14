import React from 'react'

export enum Dimension {width, heigth};

interface DimensionProps {
    dimension: Dimension,
    
};

export default class DimensionConfigurator extends React.PureComponent<DimensionProps> {
    
    constructor(props: DimensionProps) {
        super(props) ;
    }

    render() {
        return (
        <div >
            <p>{this.props.dimension === Dimension.width ? "I'm a width Configurator" : "I'm an heigth Configurator"}</p>
        </div>
        )
    };
}