import React, { useState } from "react";
import {
    TreeList, TreeListToolbar, mapTree, extendDataItem,
    TreeListTextEditor, TreeListNumericEditor, TreeListDateEditor, TreeListBooleanEditor
} from '@progress/kendo-react-treelist';
import { Renderers } from './treeListRenderers';
import employees from './data/tree-list';

const columns = [
  { field: 'name', title: 'Name', width: 280, editCell: TreeListTextEditor, expandable: true },
  { field: 'position', title: 'Position', width: 260, editCell: TreeListTextEditor },
  { field: 'hireDate', title: 'Hire Date', format: '{0:d}', width: 170, editCell: TreeListDateEditor },
  { field: 'timeInPosition', title: 'Year(s) in Position', width: 170, editCell: TreeListNumericEditor },
  { field: 'fullTime', title: 'Full Time', width: 160, editCell: TreeListBooleanEditor }
];

const TreeListWrap = () => {
  document.title = `KendoReact TreeList ~ Telerik R3 2019 Demo`;

  const [pageState, setPageState] = useState({
    data: [...employees],
    expanded: [1, 2, 32],
    editItem: undefined,
    editItemField: undefined,
    changes: false
  });
  
  const subItemsField = 'employees';
  const expandField = 'expanded';
  const editField = 'inEdit';

  const enterEdit = (dataItem, field) => {
    setPageState({
      ...pageState,
      editItem: { ...dataItem },
      editItemField: field
    });
  };

  const exitEdit = () => {
    setPageState({
      ...pageState,
      editItem: undefined,
      editItemField: undefined
    });
  };
  const renderers = new Renderers(enterEdit, exitEdit, editField);

  const { data, changes, expanded, editItem, editItemField } = pageState;
  const editItemId = editItem ? editItem.id : null;

  /* TreeList Events */
  const handleExpandChange = (event) => {
    setPageState({
      ...pageState,
      expanded: event.value
        ? pageState.expanded.filter(id => id !== event.dataItem.id)
        : [...pageState.expanded, event.dataItem.id]
    });
  };
  const handleItemChange = (event) => {
    setPageState({
      ...pageState,
      changes: true,
      data: mapTree(pageState.data, subItemsField, item =>
        event.dataItem.id === item.id
          ? extendDataItem(item, subItemsField, { [event.field]: event.value })
          : item
      )
    });
  };

  /* TreeListToolbar Events */
  const handleSaveChanges = () => {
    employees.splice(0, employees.length, ...pageState.data);
    setPageState({
      ...pageState,
      editItem: undefined,
      editItemField: undefined,
      changes: false
    });
  };

  const handleCancelChanges = () => {
    setPageState({
      ...pageState,
      data: [...employees],
      editItem: undefined,
      editItemField: undefined,
      changes: false
    });
  };

  return (
    <TreeList
      style={{ maxHeight: "510px", overflow: "auto" }}
      data={mapTree(data, subItemsField, item =>
        extendDataItem(item, subItemsField, {
          [expandField]: expanded.includes(item.id),
          [editField]: item.id === editItemId
            ? editItemField
            : undefined
        })
      )}
      editField={editField}
      expandField={expandField}
      subItemsField={subItemsField}
      cellRender={renderers.cellRender}
      rowRender={renderers.rowRender}
      onItemChange={handleItemChange}
      onExpandChange={handleExpandChange}
      columns={columns.map(column => ({
        ...column,
        editCell: editItemField === column.field
          ? column.editCell
          : undefined
      }))}
      toolbar={
        <TreeListToolbar>
          <button onClick={handleSaveChanges}
            aria-label="Save Changes" title="Save Changes" 
            className="k-button" disabled={!changes}
          >Save Changes</button>
          <button onClick={handleCancelChanges} 
            aria-label="Cancel Changes" title="Cancel Changes" 
            className="k-button" disabled={!changes}
          >Cancel Changes</button>
        </TreeListToolbar>
      }
    />
  )
}

export default TreeListWrap;
