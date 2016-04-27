import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import FlatButton from 'material-ui/lib/flat-button';
import * as Colors from 'material-ui/lib/styles/colors';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

export default class CategoryGrid extends Component {
  constructor(props) {
    super(props);
  }

render() {
  console.log(this.props.activeCategory[0].items);
  const tableData = this.props.activeCategory[0].items;
  return (
    <div>
        <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Rank</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Score</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map( (row, index) => (
            <TableRow key={index} selected={row.selected}>
              <TableRowColumn>{index}</TableRowColumn>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>{row.votes}</TableRowColumn>
            </TableRow>
            ))}
        </TableBody>
      </Table>
      <FlatButton
        label="Okey"
        secondary={true}
        onTouchTap={this.handleRequestClose}
      />
     </div>
   );
  }
}
