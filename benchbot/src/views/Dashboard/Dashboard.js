import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import Compare from '../Components/Compare/';
import JobsTable from '../Components/Table/JobsTable';

// online
const urlJoblist = '/benchbot/bench/history?detail=1';
// local
// const urlJoblist = 'http://localhost:3000/benchbot/bench/history?detail=1';

// GetJson
var getJSON = function(url) {
  var promise = new Promise(function(resolve, reject){
    axios({
     method:'get',
     url: urlJoblist,
     headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
         }
     }).then(function(res){
        if(res.status == 200)
            resolve(res.data);
        else
            reject(new Error(res));
     });
  });

  return promise;
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toCompare = this.toCompare.bind(this);
    this.state = {
      loading: false,
      dropdownOpen: false,
      jobs: [],
      selJobs: []
    };

    this.getJobs();//get job history
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  // 改变 jobs 状态的回调函数
  toCompare(newjobs) {
    this.setState({
      loading: true,
      jobs: newjobs
    });

  	this.getSelJobs();
  }

  getJobs() {
	// Make a request for all jobs history
	 getJSON(urlJoblist).then(function(json) {
		  console.log(json);
      
		  this.addSelectTags(json);
		}.bind(this), function(error) {
		  console.error('出错了', error);
		});
	}

  // 给 jobs 列表中每一项增加 sel 标记，表示当先是否选中 默认为0
  addSelectTags(jobs) {
		jobs.map((job,index) => {
			if(!job.sel)
			job.sel = false;
		});
		
    this.setState({
        jobs: jobs
      });
  }

  getSelJobs() {
    var selJobs = [];
  	selJobs = this.state.jobs.filter(job => {
  		if(job.sel)
  			return job;
  	});
  	
  	this.setState({
      selJobs: selJobs,
      loading: false
    });
  }

  render() {
    return (
      <div className="animated fadeIn dashboard">
        <div className="history">
        	<h1>Jobs History</h1>
        	<JobsTable jobs={this.state.jobs || []} toCompare={this.toCompare} />
        </div>
        <div className="result">
          <div className={classnames({ loading: this.state.loading },{ hide: !this.state.loading })}>
              <div className="sk-folding-cube">
              <div className="sk-cube1 sk-cube"></div>
              <div className="sk-cube2 sk-cube"></div>
              <div className="sk-cube4 sk-cube"></div>
              <div className="sk-cube3 sk-cube"></div>
            </div>
          </div>
        	<h1>Compare Results</h1>
    		  <Compare selJobs={this.state.selJobs} />
        </div>
      </div>
    )
  }
}

export default Dashboard;
