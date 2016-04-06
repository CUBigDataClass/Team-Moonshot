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
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>Nike</TableRowColumn>
            <TableRowColumn>10,334</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>Addidas</TableRowColumn>
            <TableRowColumn>4,453</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>Reebok</TableRowColumn>
            <TableRowColumn>1,110</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>New Balance</TableRowColumn>
            <TableRowColumn>648</TableRowColumn>
          </TableRow>
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
          <div>
                <TextField id="searchBar1" ref="searchBar" name="newName"
                hintText="Enter a product category"
                defaultValue=""/>
          </div>
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

const tableData=[
{
    name:'Miranda Butler',
    roll: '001',
},
{
    name:'Simon Hewett',
    roll: '002',
},
{
    name:'Rishabh Raghavendran',
    roll: '003',
}];

export default Main;
