import React, { useState } from "react";
import { Pager } from "@progress/kendo-react-data-tools";
import DemoConfigurator from "./demoConfigurator";
import products from "./data/pager-grid-products.json";
import "./PagerWrap.scss";

const PagerWrap = () => {
  const total = products.length;
  const pageSizes = [5, 10, 20];

  const [pageState, setPageState] = useState({
    skip: 0,
    take: 5,
    buttonCount: 5,
    type: "numeric",
    info: true,
    pageSizes: true,
    previousNext: true
  });

  const { skip, take, ...rest } = pageState;

  const handlePageChange = event => {
    const { skip, take } = event;
    setPageState({ ...pageState, skip: skip, take: take });
  };

  const handleConfiguratorSettings = event => {
    if (event.setting === "buttonCount") {
      setPageState({
        ...pageState,
        [event.setting]: parseInt(event.value, 10)
      });
    } else {
      setPageState({ ...pageState, [event.setting]: event.value });
    }
  };

  let subProducts = products.slice(skip, (take+skip))

  return (
    <>
      <DemoConfigurator onChange={handleConfiguratorSettings} values={rest} />
      <Pager
        skip={skip}
        take={take}
        total={total}
        buttonCount={pageState.buttonCount}
        info={pageState.info}
        type={pageState.type}
        pageSizes={pageState.pageSizes ? pageSizes : undefined}
        previousNext={pageState.previousNext}
        onPageChange={handlePageChange}
      />
    <div className="pager-products">
      <span>total: {total}</span> &nbsp; <span>skip: {skip}</span> &nbsp; <span>take: {take}</span><br />
      <ul className="repeat-products">
        { subProducts.map((item) => <li key={item.ProductID}>{item.ProductName}</li>) }
      </ul>
      <span><code className="pager-code">product.slice({skip},{take+skip})</code></span>
    </div>
    </>
  );
};

export default PagerWrap;
