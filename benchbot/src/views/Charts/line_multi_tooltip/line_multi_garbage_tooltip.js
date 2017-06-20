"use strict"

var React = require('react');
var ReactDOM = require('react-dom');
var LineTooltip = require('react-d3-tooltip').LineTooltip;

const chartConfig = {
  width: "700",
  height: "300",
  margins: {left: "100", right: "100", top: "50", bottom: "50"},
  title: 'Bench Case1 - Bytes',
  xScale: 'Number',
  yLabel: 'Bytes'
};

const TootTipChart = React.createClass({
  setChartSeries() {

    var chartSeries = [{
          field: 'Byt',
          name: this.propTypes.ids[0]
        },
        {
          field: 'incineration',
          name: 'Incineration'
        },
        {
          field: 'garbageBury',
          name: 'Garbage Bury',
          area: true
        }];
   
  },
  render() {
    return (
      <div>
        <LineTooltip title= {this.propTypes.title} data= {this.props.data} width= {this.propTypes.width} height= {this.propTypes.height} margins= {this.propTypes.margins} chartSeries= {this.propTypes.chartSeries} x= {this.propTypes.x} xScale= {this.propTypes.xScale} yLabel = {this.propTypes.yLabel} />
      </div>
    );
  }
});

export default TootTipChart;

