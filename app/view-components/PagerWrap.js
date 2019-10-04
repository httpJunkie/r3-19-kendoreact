import React, { useState } from "react";
import { Pager } from "@progress/kendo-react-data-tools";
import DemoConfigurator from "./demoConfigurator";
import { products } from "./data/products";
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

  const handlePageChange = (event) => {
    const { skip, take} = event;
    setPageState({ ...pageState, skip: skip, take: take });
  };

  const handleConfiguratorSettings = (event) => {
    if(event.setting === "buttonCount"){
      setPageState({ ...pageState, [event.setting]: parseInt(event.value,10) });
    } else {
      setPageState({ ...pageState, [event.setting]: event.value });
    }
  };

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
    </>
  );
};

export default PagerWrap;
