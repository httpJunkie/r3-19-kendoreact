import React, { useState } from "react";
import { ColorPalette } from "@progress/kendo-react-inputs";
import "@progress/kendo-react-intl";
import "@progress/kendo-drawing";
import './ColorPaletteWrap.scss';

import lightImage from'../public/images/tshirtImage_light.png';
import darkImage from'../public/images/tshirtImage_dark.png';

const colorNames = {
  '#37399b': 'Navy blue',
  '#a81c85': 'Violet',
  '#0ab3cc': 'Light blue',
  '#2f7d20': 'Forest green',
  '#a21616': 'Dark red'
}

const ColorPaletteWrap = (props) => {
  document.title = `KendoReact Pager ~ Telerik R3 2019 Demo`;
  const theme = props.theme;
  const isLight = theme === "light";
  const tshirtImage = isLight ? lightImage: darkImage;

  const [colorValue, setColorValue] = useState("#a21616");

  function handleColorPalleteChange(event) {
    const value = event.value;
    setColorValue(value);
  }

  return (
    <div className="color-palette-example">
      <div className="img" style={{ backgroundColor: colorValue, backgroundImage: `url(${tshirtImage})`}} />
      <div className="description" >

        <h1>Comfy T-shirt with a cut-away neckline</h1>
        <p className="price">$19.99</p>
        <span>incl. VAT</span>

        <p className="selected-color">{colorNames[colorValue]}</p>
        <ColorPalette onChange={handleColorPalleteChange}
          palette={["#37399b", "#a81c85", "#0ab3cc", "#2f7d20", "#a21616"]}
          value={colorValue} tileSize={40} defaultValue={isLight ? '#FFF': '#000'}
        />
        
        <button aria-label="Shopping Cart" className="k-button">Add to cart</button>
      </div>
    </div>
  );
}

export default ColorPaletteWrap;
