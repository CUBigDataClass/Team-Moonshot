import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import FlatButton from 'material-ui/lib/flat-button';
import * as Colors from 'material-ui/lib/styles/colors';
import ReactD3 from 'react-d3';
const BarChart = ReactD3.BarChart;


export default class GraphComponent extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const data = this.props.activeCategory[0].items;

    console.log(data);
    return(
      <BarChart
          data={data}
          width={400}
          height={400}
          margin={{top: 10, bottom: 50, left: 50, right: 10}} />
    );
  }
}
