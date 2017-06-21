import React, { Component } from 'react';
import classNames from 'classnames';

const url = '/benchbot/bench/job/';

class SelJobsTable extends Component {

  getStatusClass(status){
    return classNames({
      'badge': true,
      'badge-success': status === 'finished',
      'badge-danger': status === 'aborted',
      'badge-warning': status === 'running' || status === 'deploying',
      'badge-default': status === 'pending'
    });
  }

  render() {
    return (
      <div className="animated fadeIn all-jobs">
        <table className="table table-hover table-outline mb-0 hidden-sm-down">
          <thead className="thead-default">
            <tr>
              <th className="text-center">Job ID</th>
              <th>Created Time</th>
              <th>Note</th>
              <th>From</th>
              <th>Status</th>
              <th>Packages</th>
              <th>View More</th>
            </tr>
          </thead>
          <tbody>          
              {
                this.props.jobs.map((item,index) => 
                  (
                    <tr key={item.id}>
                            <td className="text-center">
                              {item.id}
                            </td>
                            <td>
                              {item.created_time}
                            </td>
                            <td>
                              {item.meta.note}
                            </td>
                            <td>
                              {item.meta.from}
                            </td>
                            <td>
                              <span className={this.getStatusClass(item.status)}>{item.status}</span>
                            </td>
                            <td>
                              <div>
                                <p><strong>{item.meta.packages[0].repo} githash:</strong> {item.meta.packages[0].git_hash.slice(0,7)} | <strong>tag:</strong> {item.meta.packages[0].tag}</p>
                                <p><strong>{item.meta.packages[1].repo} githash:</strong> {item.meta.packages[1].git_hash.slice(0,7)} | <strong>tag:</strong> {item.meta.packages[1].tag}</p>
                                <p><strong>{item.meta.packages[2].repo} githash:</strong> {item.meta.packages[2].git_hash.slice(0,7)} | <strong>tag:</strong> {item.meta.packages[2].tag}</p>
                              </div>
                            </td>
                            <td>
                              <a href={url+item.id+'?detail=1'} target="_blank"> details </a>
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

export default SelJobsTable;
