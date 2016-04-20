
/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import * as Colors from 'material-ui/lib/styles/colors';
import FlatButton from 'material-ui/lib/flat-button';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import TextField from 'material-ui/lib/text-field';
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';
import AutoComplete from 'material-ui/lib/auto-complete';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: Colors.pinkA200,
  },
});
const productCategories=[
    'shoes','coffee shops', 'pizza places', 'surf shops',
]
const tableData=[
{
    rank: 1,
    name: 'Nike',
    score: 10334,
},
{
    rank: 2,
    name: 'Addidas',
    score: 4453,
},
{
    rank: 3,
    name: 'Reebok',
    score: 1110,
},
{
    rank: 4,
    name: 'New Balance',
    score: 600,
}];

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.searchText = this.searchText.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  searchText(){
      if(this.refs.searchBar.getValue() === undefined){
          return("something");
      }
      else {
          const text = this.refs.searchBar.getValue();
          return(text);
      }
  }

  render() {
    const standardActions = (
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
    );


    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>PROJECT-MOONSHOT</h1>
          <AutoComplete
            floatingLabelText="Enter a product category"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={productCategories}
          />
          <Dialog
            open={this.state.open}
            title= "Ranking Table"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            You searched for Shoes
          </Dialog>
          <RaisedButton
            label="Search"
            primary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
