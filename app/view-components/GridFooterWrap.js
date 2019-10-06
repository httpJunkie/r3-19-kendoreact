import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import products from "./data/grid-products.json";

const UnitPriceCell = props => {
  const min = products.reduce(
    (acc, current) => Math.min(acc, current[props.field]),
    Number.MAX_VALUE
  );
  const max = products.reduce(
    (acc, current) => Math.max(acc, current[props.field]),
    0
  );
  return (
    <td colSpan={props.colSpan} style={props.style}>
      min: {min}, max: {max}
    </td>
  );
};

const UnitsInStockCell = props => {
  const total = products.reduce(
    (acc, current) => acc + current[props.field],
    0
  );
  return (
    <td colSpan={props.colSpan} style={props.style}>
      total: {total}
    </td>
  );
};

const GridFooterWrap = () => {
  document.title = `KendoReact Grid ~ Telerik R3 2019 Demo`;
  return (
    <Grid style={{ height: "353px" }} data={products}>
      <Column field="ProductID" title="ID" width="70px" />
      <Column field="ProductName" title="Product Name" />
      <Column field="UnitPrice" title="Unit Price" footerCell={UnitPriceCell} />
      <Column field="UnitsInStock" title="Units In Stock" footerCell={UnitsInStockCell} />
      <Column field="Category.CategoryName" title="Category Name" />
    </Grid>
  );
};

export default GridFooterWrap;
