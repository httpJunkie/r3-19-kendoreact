import React from "react";
import { Column, Row } from "simple-flexbox";

const DemoConfigurator = props => {
  const values = props.values;
  return (
    <>
      <Row vertical="center">
        <Column flexGrow={1} horizontal="start">
          <dl>
            <dt>Pager type:</dt>
            <dd>
              <input type="radio" name="pager" id="numeric" className="k-radio" value="numeric" checked={values.type === "numeric"} 
                onChange={event => props.onChange({ value: event.target.value, setting: "type" })}
              />
              <label style={{ margin: "7px 3em 7px 0px", lineHeight: "1.2" }} className="k-radio-label" htmlFor="numeric">
                Numeric&nbsp;
              </label>
              <input type="radio" name="pager" id="input" className="k-radio" value="input" checked={values.type === "input"}
                onChange={event => props.onChange({ value: event.target.value, setting: "type" })}
              />
              <label style={{ margin: "7px 3em 7px 0px", lineHeight: "1.2" }} className="k-radio-label" htmlFor="input">
                Input&nbsp;
              </label>
            </dd>
          </dl>
          <dl>
            <dt>Max. number of buttons:</dt>
            <dd>
              <input value={values.buttonCount} className="k-textbox" type="number"
                onChange={event =>
                  props.onChange({
                    value: event.target.valueAsNumber,
                    setting: "buttonCount"
                  })
                }
              />
            </dd>
          </dl>
        </Column>
        <Column flexGrow={1} horizontal="start">
          <input className="k-checkbox" checked={values.info} id="showInfo" type="checkbox"
            onChange={event => props.onChange({ value: event.target.checked, setting: "info" })}
          />
          <label htmlFor="showInfo" className="k-checkbox-label">
            Show info
          </label>
          <br />
          <br />
          <input className="k-checkbox" checked={values.pageSizes} id="pageSize" type="checkbox"
            onChange={event =>
              props.onChange({
                value: event.target.checked,
                setting: "pageSizes"
              })
            }
          />
          <label htmlFor="pageSize" className="k-checkbox-label">
            Show page sizes
          </label>
          <br />
          <br />
          <input className="k-checkbox" checked={values.previousNext} id="previousNext" type="checkbox"
            onChange={event =>
              props.onChange({
                value: event.target.checked,
                setting: "previousNext"
              })
            }
          />
          <label htmlFor="previousNext" className="k-checkbox-label">
            Show previous / next buttons
          </label>
        </Column>
      </Row>
    </>
  );
};

export default DemoConfigurator;