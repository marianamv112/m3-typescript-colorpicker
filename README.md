This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# LAB SquareConfigurator

## Iteration 1
- Create a new JSX Component Class "SquareConfigurator", it should render "Hello I'm a square configurator"
- add it to App.tsx
- Create as new JSW Component Class "DimensionConfigurator", it should render "I'm a DimensionConfigurator"
- add two "DimensionConfigurator"s to the render method fo the SquareConfigurator

## Iteration 2
- add the property "Dimension" to the DimensionConfigurator Class
- create an "enum" as a type for the dimension property. Dimension can be "width" or "heigth"
- change the render method of the Class "DimensionConfigurater" so the it renders one of those according to the dimension property
  - I'm a width configurator
  - I'm a height configurator
- in Class "SquareConfigurator" set the dimension prop of the first to "height" and the dimension prop of the second to "width"

## Iteration 3
- add a "length" property to the DimensionConfigurator
- show the length visually with a "div" that has the width of "length" in pixels

## Iteration 4
- add an input field to the DimensionConfigurator, to change the length
- add state to "SquareConfigurator" for width and height of a square
- add a div with the width and height in state to render a square width this width and height in pixels
- add eventhandlers in SquareConfigurator and DimensionConfigurator, so that a user can change width and hight and the UI gets updated accordingliy
