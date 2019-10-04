import React from 'react';
import {
    TreeList, TreeListToolbar, mapTree, extendDataItem,
    TreeListTextEditor, TreeListNumericEditor, TreeListDateEditor, TreeListBooleanEditor
} from '@progress/kendo-react-treelist';
import { Renderers } from './treeListRenderers';
import employees from './data/tree-list';

const subItemsField = 'employees';
const expandField = 'expanded';
const editField = 'inEdit';

const columns = [
    { field: 'name', title: 'Name', width: 280, editCell: TreeListTextEditor, expandable: true },
    { field: 'position', title: 'Position', width: 260, editCell: TreeListTextEditor },
    { field: 'hireDate', title: 'Hire Date', format: '{0:d}', width: 170, editCell: TreeListDateEditor },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: 170, editCell: TreeListNumericEditor },
    { field: 'fullTime', title: 'Full Time', width: 160, editCell: TreeListBooleanEditor }
];

// const TreeListWrap = () => {
//   document.title = `KendoReact TreeList ~ Telerik R3 2019 Demo`;
//   return (
//     <div className="view-tree-list">
//       <h1>TreeList</h1>
//     </div>
//   )
// }

class TreeListWrap extends React.Component {
  state = {
    data: [...employees],
    expanded: [1, 2, 32],
    editItem: undefined,
    editItemField: undefined,
    changes: false
  };

  renderers;

  constructor(props) {
    super(props);

    const enterEdit = (dataItem, field) => {
      this.setState({
        editItem: { ...dataItem },
        editItemField: field
      });
    };

    const exitEdit = () => {
      this.setState({
        editItem: undefined,
        editItemField: undefined
      });
    };
    this.renderers = new Renderers(enterEdit, exitEdit, editField);
  }

  render() {
    const { data, changes, expanded, editItem, editItemField } = this.state;
    const editItemId = editItem ? editItem.id : null;

    return (
      <TreeList
        style={{ maxHeight: "510px", overflow: "auto" }}
        data={mapTree(data, subItemsField, item =>
          extendDataItem(item, subItemsField, {
            [expandField]: expanded.includes(item.id),
            [editField]: item.id === editItemId ? editItemField : undefined
          })
        )}
        editField={editField}
        expandField={expandField}
        subItemsField={subItemsField}
        cellRender={this.renderers.cellRender}
        rowRender={this.renderers.rowRender}
        onItemChange={this.itemChange}
        onExpandChange={this.onExpandChange}
        columns={columns.map(column => ({
          ...column,
          editCell: editItemField === column.field ? column.editCell : undefined
        }))}
        toolbar={
          <TreeListToolbar>
            <button
              aria-label="Cancel Changes" 
              title="Save Changes"
              className="k-button"
              onClick={this.saveChanges}
              disabled={!changes}
            >
              Save Changes
            </button>
            <button
              aria-label="Save Changes" 
              title="Cancel Changes"
              className="k-button"
              onClick={this.cancelChanges}
              disabled={!changes}
            >
              Cancel Changes
            </button>
          </TreeListToolbar>
        }
      />
    );
  }

  onExpandChange = event => {
    this.setState({
      expanded: event.value
        ? this.state.expanded.filter(id => id !== event.dataItem.id)
        : [...this.state.expanded, event.dataItem.id]
    });
  };

  saveChanges = () => {
    employees.splice(0, employees.length, ...this.state.data);
    this.setState({
      editItem: undefined,
      editItemField: undefined,
      changes: false
    });
  };

  cancelChanges = () => {
    this.setState({
      data: [...employees],
      editItem: undefined,
      editItemField: undefined,
      changes: false
    });
  };

  itemChange = event => {
    this.setState({
      changes: true,
      data: mapTree(this.state.data, subItemsField, item =>
        event.dataItem.id === item.id
          ? extendDataItem(item, subItemsField, { [event.field]: event.value })
          : item
      )
    });
  };
}

export default TreeListWrap;
