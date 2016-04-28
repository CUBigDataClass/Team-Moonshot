
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
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import ReactD3Core from 'react-d3-core';
import ReactD3Basic from 'react-d3-basic';


const BarChart = ReactD3Basic.BarChart;
const Chart = ReactD3Core.Chart;


const width = 700,
  height = 400,
  title = "Bar Chart",
  chartSeries = [
    {
      field: 'score',
      name: 'name',
  },
  ],
  x = function(d) {
    return d.letter;
  },
  xScale = 'ordinal',
  xLabel = "Products",
  yLabel = "Score",
  yTicks = [10, "%"];


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};


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
},
{
    rank: 5,
    name: 'Newer Balance',
    score: 323,
}];


class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.searchText = this.searchText.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      open: false,
      val:'Footwear',
    };

  }

  handleChange(e, index, value) {
    this.setState({
      val: value,
    });
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

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>

          <BarChart
            title= {title}
            data= {tableData}
            width= {width}
            height= {height}
            chartSeries = {chartSeries}
            x= {x}
            xLabel= {xLabel}
            xScale= {xScale}
            yTicks= {yTicks}
            yLabel = {yLabel}
          />


        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
