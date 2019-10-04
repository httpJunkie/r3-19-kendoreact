import React, { useState } from "react";
import { ColorPicker, ColorPalette } from "@progress/kendo-react-inputs";
import './ColorPickerWrap.scss'

import lightImage from'../public/images/kendokaImage_light.png';
import darkImage from'../public/images/kendokaImage_dark.png';

const ColorPickerWrap = (props) => {
  document.title = `KendoReact ColorPicker ~ Telerik R3 2019 Demo`;
  const themeMode = props.themeMode;
  const isLight = themeMode === "light";
  
  const kendokaImage = isLight ? lightImage: darkImage;
  const kendoColors = {
    'rgba(78, 174, 197, 1)': 'KendoReact',
    'rgba(254, 65, 59, 1)': 'Kendo UI for Angular',
    'rgba(66, 182, 131, 1)': 'Kendo UI for Vue',
    'rgba(255, 85, 0, 1)': 'Kendo UI for jQuery'
  };

  const palette = Object.keys(kendoColors);
  // https://www.telerik.com/kendo-react-ui/components/inputs/colorpalette/presets/
  // const paletteSettings = {  palette: ['austin', 'verve', 'basic', 'monochrome'] };
  const paletteSettings = { palette, tileSize: 20 };

  const [selectedColor, setSelectedColor] = useState(palette[0]);

  const onColorPickerChange = (event) => {
    const value = event.value;
    setSelectedColor(value)
  };

  return (
    <>
      <h4 style={{ textAlign: 'center' }}>{kendoColors[selectedColor]}</h4>
      <div style={{ backgroundColor: selectedColor, width: 500, height: 490, margin: 'auto', textAlign: 'center'  }}>
        <div style={{ margin: '0 auto', width: 500, height: 500, backgroundSize: 'cover', backgroundImage: `url(${kendokaImage})`}}></div>
        <ColorPalette onChange={onColorPickerChange} {...paletteSettings} value={selectedColor} /> &nbsp; &nbsp; 
        <ColorPicker onChange={onColorPickerChange} paletteSettings={paletteSettings} value={selectedColor} view={'palette'} tileSize={30} />
      </div>
  </>
  )
}

export default ColorPickerWrap;