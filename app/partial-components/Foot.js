import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Column, Row } from "simple-flexbox";
import { Switch } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const Foot = () => {
  const context = useContext(AppContext);
  const isLight = context.theme === "light";

  const handleThemeSwitch = () => {
    context.changeTheme(isLight ? 'dark' : 'light');
  }
  const handleLocaleChange = (event) => {
    context.changeLocale(event.target.value);
  }

  return (
    <Row>
      <Column flexGrow={1} >
        <span className="foot-info">
          ❄️R3 KendoReact 2019 | &nbsp; <Switch onChange={handleThemeSwitch} checked={isLight} onLabel={"light theme"} offLabel={"dark theme"} />
        </span>
      </Column>
      <Column flexGrow={1} horizontal="end">
        <DropDownList onChange={handleLocaleChange} data={context.availableLocales} textField="code" value={context.locale} />
      </Column>
    </Row>
  );
};

export default Foot;
