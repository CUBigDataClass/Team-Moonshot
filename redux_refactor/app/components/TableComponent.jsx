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
}

render() {
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
              <TableRowColumn>{row.rank}</TableRowColumn>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>{row.score}</TableRowColumn>
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
  )
}
