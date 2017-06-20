import React, { Component } from 'react';
import classNames from 'classnames';

const url = '/benchbot/bench/job/';

class JobsTable extends Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
  }

  toggle(item,index) {
    this.props.jobs[index].sel = !item.sel;
  }

  compare() {
    this.props.toCompare(this.props.jobs);
  }

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
              <th className="text-center">Packages</th>
              <th>View More</th>
              <th className="text-center">Compare</th>
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
                            <td className="text-center">
                              <div>
                                <p><a href={item.meta.packages[0].binary_url}><strong>{item.meta.packages[0].repo} branch: {item.meta.packages[0].branch} | platform: {item.meta.packages[0].platform}</strong></a></p>
                                <p><a href={item.meta.packages[1].binary_url}><strong>{item.meta.packages[1].repo} branch: {item.meta.packages[1].branch} | platform: {item.meta.packages[1].platform}</strong></a></p>
                                <p><a href={item.meta.packages[2].binary_url}><strong>{item.meta.packages[2].repo} branch: {item.meta.packages[2].branch} | platform: {item.meta.packages[2].platform}</strong></a></p>
                              </div>
                            </td>
                            <td>
                              <a href={url+item.id+'?detail=1'} target="_blank"> detail infos </a>
                            </td>
                            <td className="text-center">
                              <label className="checkbox-inline">
                                <input type="checkbox" value={item.sel} onChange={() => { this.toggle(item,index); }} />
                              </label>
                            </td>
                    </tr>
                  )
                )
              }
          </tbody>
        </table>

        <button type="button" className="btn btn-primary compare" onClick={() => { this.compare() }}><i className="fa fa-magic"></i>&nbsp; Go To Compare</button>
      </div>

    )
  }
}

export default JobsTable;
