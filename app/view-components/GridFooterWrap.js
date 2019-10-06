import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import products from "./data/grid-products.json";

const GridFooterWrap = () => {
  document.title = `KendoReact Grid ~ Telerik R3 2019 Demo`;
  const unitPriceCell = (props) => {
    const min = products.reduce( (acc, current) => Math.min(acc, current[props.field]), Number.MAX_VALUE );
    const max = products.reduce( (acc, current) => Math.max(acc, current[props.field]), 0 );
    return (
      <td colSpan={props.colSpan} style={props.style}>
        min: {min}, max: {max}
      </td>
    );
  };
  const unitsInStockCell = (props) => {
    const total = products.reduce( (acc, current) => acc + current[props.field], 0 );
    return (
      <td colSpan={props.colSpan} style={props.style}>
        total: {total}
      </td>
    );
  }; 

  return (
    <Grid style={{ height: "353px" }} data={products}>
      <Column field="ProductID" title="ID" width="70px" />
      <Column field="ProductName" title="Product Name" />
      <Column field="UnitPrice" title="Unit Price" footerCell={unitPriceCell} />
      <Column field="UnitsInStock" title="Units In Stock" footerCell={unitsInStockCell} />
      <Column field="Category.CategoryName" title="Category Name" />
    </Grid>
  );
};

export default GridFooterWrap;