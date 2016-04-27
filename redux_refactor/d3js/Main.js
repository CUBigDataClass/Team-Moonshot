/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactD3 from "react-d3";



const rd3 = require('react-d3');
const BarChart = rd3.BarChart;
const LineChart = rd3.LineChart;
const PieChart = rd3.PieChart;
const AreaChart = rd3.AreaChart;
const Treemap = rd3.Treemap;
const ScatterChart = rd3.ScatterChart;
const CandleStickChart = rd3.CandleStickChart;

const data = [
  {
    name: "series1",
    values: [ { x: 0, y: 2 }, { x: 8, y: 19 },{x: 16, y: 10} ]
  },
  {
    name: "series2",
    values: [ { x: 0, y: 22 }, { x: 8, y: 11 }, { x: 16, y: 19} ]
  }
];

const barData = [
  {
    name: "series1",
    values: [ { x: "item1", y: 20 }, { x: "item2", y: 10 }, {x: "item3", y: 17}, {x: "item4", y: 8} ]
  },
];





const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

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

  render() {
    const standardActions = (
      <FlatButton
        label="Ok"
        secondary={true}
        onTouchTap={this.handleRequestClose}
      />
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Super Secret Password"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            1-2-3-4-5
          </Dialog>
          <h1>Project Moonshot</h1>
          
            <LineChart
            legend={true}
             data={data}
             width={500}
             height={300}
             title="Line Chart"
            />
            
           <ScatterChart
            data={data}
            width={500}
            height={400}
            yHideOrigin={true}
            title="Scatter Chart"
            />
            
            <BarChart
            data={barData}
            width={500}
            height={200}
            fill={'#3182bd'}
            title='Bar Chart'
            />
            
            
            
            
            
          <h2>example project</h2>
          <RaisedButton
            label="Super Secret Password"
            primary={true}
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
