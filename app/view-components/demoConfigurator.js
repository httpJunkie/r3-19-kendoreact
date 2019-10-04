import React from "react";

const DemoConfigurator = props => {
  const values = props.values;
  return (
    <>
      <div className="pager-config">
        <div className="col-md-6">
          <dl>
            <dt>Pager type:</dt>
            <dd>
              <input
                type="radio"
                name="pager"
                id="numeric"
                className="k-radio"
                value="numeric"
                checked={values.type === "numeric"}
                onChange={event =>
                  props.onChange({ value: event.target.value, setting: 'type' })
                }
              />
              <label
                style={{ margin: "7px 3em 7px 0px", lineHeight: "1.2" }}
                className="k-radio-label"
                htmlFor="numeric"
              >
                Numeric&nbsp;
              </label>

              <input
                type="radio"
                name="pager"
                id="input"
                className="k-radio"
                value="input"
                checked={values.type === "input"}
                onChange={event =>
                  props.onChange({ value: event.target.value, setting: 'type' })
                }
              />
              <label
                style={{ margin: "7px 3em 7px 0px", lineHeight: "1.2" }}
                className="k-radio-label"
                htmlFor="input"
              >
                Input&nbsp;
              </label>
            </dd>
          </dl>
          <dl>
            <dt>Max. number of buttons:</dt>
            <dd>
              <input
                value={values.buttonCount}
                className="k-textbox"
                type="number"
                onChange={event =>
                  props.onChange({ value: event.target.valueAsNumber, setting: 'buttonCount' })
                }
              />
            </dd>
          </dl>
        </div>
        <div className="col-md-6 row">
          <div className="col-md-12">
            <input
              className="k-checkbox"
              checked={values.info}
              id="showInfo"
              type="checkbox"
              onChange={event =>
                props.onChange({ value: event.target.checked, setting: 'info' })
              }
            />
            <label htmlFor="showInfo" className="k-checkbox-label">
              Show info
            </label>
          </div>

          <div className="col-md-12">
            <input
              className="k-checkbox"
              checked={values.pageSizes}
              id="pageSize"
              type="checkbox"
              onChange={event =>
                props.onChange({ value: event.target.checked, setting: 'pageSizes' })
              }
            />
            <label htmlFor="pageSize" className="k-checkbox-label">
              Show page sizes
            </label>
          </div>
          <div className="col-md-12">
            <input
              className="k-checkbox"
              checked={values.previousNext}
              id="previousNext"
              type="checkbox"
              onChange={event =>
                props.onChange({ value: event.target.checked, setting: 'previousNext' })
              }
            />
            <label htmlFor="previousNext" className="k-checkbox-label">
              Show previous / next buttons
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoConfigurator;
