"use strict"

var d3 = require('d3');
var React = require('react');
var ReactDOM = require('react-dom');
var LineChart = require('react-d3-basic').LineChart;

var LineMultiChart = React.createClass({
    getInitialState: function(){
      return {
        data:{
          chartData: require('../data/garbage.csv'),
          parseDate: d3.time.format("%YM%m").parse,
          width:700,
          height: 300,
          margins: {left: 100, right: 100, top: 50, bottom: 50},
          title: "",
          chartSeries: [
            {
              field: 'total',
              name: 'Total'
            },
            {
              field: 'incineration',
              name: 'Incineration'
            },
            {
              field: 'garbageBury',
              name: 'Garbage Bury',
              area: true
            }
          ],
          x: function(d) {
            return this.parseDate(d.month);
          },
          xScale: 'time'
      }
    }
  },
  render: function() {
    return (
      <LineChart title= {this.title} data= {this.chartData} width= {this.width} height= {this.height} margins= {this.margins} chartSeries= {this.chartSeries} x= {this.x} xScale= {this.xScale} />
    )
  }
});

export default LineMultiChart; 
