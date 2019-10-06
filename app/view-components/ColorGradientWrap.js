import React, { useState } from 'react';
import { ColorGradient } from '@progress/kendo-react-inputs';
import '@progress/kendo-react-intl';
import '@progress/kendo-drawing';
import "./ColorGradientWrap.scss";

const colorNames = {
  "#37399b": "Navy blue",
  "#a81c85": "Violet",
  "#0ab3cc": "Light blue",
  "#2f7d20": "Forest green",
  "#a21616": "Dark red"
};

const ColorGradientWrap = () => {
  document.title = `KendoReact GradientWrap ~ Telerik R3 2019 Demo`;
  const [colorValue, setColorValue] = useState("rgba(195, 0, 47, 1)");
  function handleGradientChange(event) {
    const value = event.value;
    setColorValue(value);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div
        style={{
          backgroundColor: colorValue,
          width: "490px",
          height: "290px",
          backgroundImage:
            'url("https://demos.telerik.com/kendo-ui/content/web/colorpicker/motor.png")'
        }}
      />
      <ColorGradient onChange={handleGradientChange} defaultValue={colorValue} value={colorValue} style={{ marginTop: "10px" }}/>
    </div>
  );
};

export default ColorGradientWrap;
