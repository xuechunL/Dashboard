import React, { Component } from 'react';

import Result from './Result.js';
import SelJobsTable from '../Table/SelJobsTable.js';

class Compare extends Component {

  render() {
  	if(this.props.selJobs && this.props.selJobs.length) {
	    return (
	      <div className="result">
	          <h1>Compare Results</h1>
	          <h2>Selected Jobs</h2>
	          	<div className="card">
                <div className="card-header">
                   <i className="fa fa-align-justify"></i> Job Details Table
                </div>
                <div className="card-block">
                   <SelJobsTable jobs={this.props.selJobs || []} />
                </div>
              </div>
             <h2>All Cases</h2>
	          <Result selJobs={this.props.selJobs} />
	          <p className="toTop"><a href="#top">to top</a></p>
	      </div>
	    )
	  } else {
  		return (
	      <div className="result"></div>
	    )
  	}
  }
}

export default Compare;