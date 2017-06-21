import React, { Component } from 'react';
import { Progress } from 'reactstrap';

class CompareResultTable extends Component {

  getValidedList() {
    const hasValue = value => (value !== undefined && value !== null);
    return this.props.list.filter(hasValue);
  }

  isNumber(n) {
    return n!==undefined && n!==null && !isNaN(n);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <table className="table table-hover table-outline mb-0 hidden-sm-down">
          <thead className="thead-default">
             <tr>
                <th className="text-center">Job ID</th>
                <th>Total</th>
                <th>Bytes</th>
                <th>Duration</th>
                <th>Qps</th>
                <th>Bps</th>
                <th>Eps</th>
                <th>Sql</th>
                <th>Latency</th>
                </tr>
          </thead>
          <tbody>          
          {
            this.getValidedList().map((__item,__index) => 
              (
                <tr key={__index}>
                  <td className="text-center">
                    {this.props.ids[__index]}
                  </td>
                  <td>
                    {this.isNumber(__item.Total) ? __item.Total : '--'}
                  </td>
                  <td>
                    <strong>{this.isNumber(__item.Bytes) ? __item.Bytes : '--'}</strong>
                  </td>
                  <td>
                     <strong>{this.isNumber(__item.Duration) ? __item.Duration : '--'}</strong>
                  </td>
                  <td>
                    <strong>{this.isNumber(__item.Qps) ? __item.Qps : '--'}</strong>
                  </td>
                  <td>
                    <strong>{this.isNumber(__item.Bps) ? __item.Bps : '--'}</strong>
                  </td>
                  <td>
                    <strong>{this.isNumber(__item.Eps) ?__item.Eps : '--'}</strong>
                  </td>
                  <td>
                    <p><span className="text-muted">Read:</span> <strong>{__item.Sql ? __item.Sql.Read : '--'}</strong></p>
                    <p><span className="text-muted">Write:</span> <strong>{__item.Sql ? __item.Sql.Write : '--'}</strong></p>
                    <p><span className="text-muted">Transaction:</span> <strong>{__item.Sql ? __item.Sql.Transaction : '--'}</strong></p>
                  </td>
                  <td>
                    <p><span className="text-muted">TotalMs:</span> <strong>{__item.Latency ? __item.Latency.TotalMs : '--'}</strong></p>
                    <p><span className="text-muted">AvgMs:</span> <strong>{__item.Latency ? __item.Latency.AvgMs : '--'}</strong></p>
                    <p><span className="text-muted">MinMs:</span> <strong>{__item.Latency ? __item.Latency.MinMs : '--'}</strong></p>
                    <p><span className="text-muted">MaxMs:</span> <strong>{__item.Latency ? __item.Latency.MaxMs : '--'}</strong></p>
                    <p><span className="text-muted">PercentileMs:</span> <strong>{__item.Latency ? __item.Latency.PercentileMs : '--'}</strong></p>
                    <div><span className="text-muted">Percentile:</span> <strong>{__item.Latency ? __item.Latency.Percentile*100 : '--'}%</strong> <Progress className="progress-xs" color="info" value={__item.Latency ? __item.Latency.Percentile*100 : '--'} /></div>
                  </td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    </div>
    )
  }
}

export default CompareResultTable;
