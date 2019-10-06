import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Switch } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const Foot = () => {
  const context = useContext(AppContext);
  const isLight = context.themeMode === "light";

  const handleThemeSwitch = () => {
    context.changeTheme(isLight ? 'dark' : 'light');
  }
  const handleLocaleChange = (event) => {
    context.changeLocale(event.target.value);
  }

  return (
    <div className="foot">
      ❄️R3 KendoReact 2019 | &nbsp;
      <Switch onChange={handleThemeSwitch} checked={isLight} onLabel={"light theme"} offLabel={"dark theme"} /> | &nbsp;
      <DropDownList onChange={handleLocaleChange} data={context.availableLocales} textField="code" value={context.selectedLocale} />
    </div>
  );
};

export default Foot;
