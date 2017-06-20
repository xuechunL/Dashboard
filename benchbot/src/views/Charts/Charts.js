import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import BytesLineChart from './BytesLineChart.js';

const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};


class Charts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="animated fadeIn charts">
        <div className="card-columns cols-2">
          <div className="card">
            <div className="card-header">
              Line Chart
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
                <Line data={line}
                  options={{
                    maintainAspectRatio: false
                  }}
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Bar Chart
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
              <Bar data={bar}
                options={{
                  maintainAspectRatio: false
                }}
              />
              </div>
            </div>
          </div>
        </div>

        <div className="card-columns cols-2">
          <div className="card">
            <div className="card-header">
              Bytes Chart
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
                <BytesLineChart data={this.props.stages} ids={this.props.selIDs}/>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Bar Chart
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
              <Bar data={bar}
                options={{
                  maintainAspectRatio: false
                }}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Charts;
