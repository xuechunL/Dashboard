import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import CompareResultTable from '../Table/CompareResultTable.js';

var comResults = [];

class Compare extends Component {

  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 0
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  getCases() {
    var jobs    = this.props.selJobs,
        results = [],
        counts  = [],
        mCases  = 1;

    comResults = [];
    results = Array.from(jobs, (j) => j.result); // 获得选中 job 的 result 列表
    counts  = Array.from(results, (r) => r.cases); 
    mCases  = Math.max(...counts); //去最多的 cases 

    for(var i=0; i<mCases; i++){
      var clist = { 
            name:'',
            list:[]
          };
      jobs.map((job, index) => {
        var result = job.result || {};
        if(i < result.cases && result.details && result.details.length){
          clist.name = result.details[i].name;
          clist.list.push(result.details[i]);
        } else {
          clist.list.push({});
        }
      });

      comResults.push(clist);
    }
    
    // console.log(comResults)

    return comResults || [];
  }

  getSummary(list) {
    // console.log(Array.from(list, (l) => l.summary || []))
    return Array.from(list, (l) => l.summary);
  }

  getStages(list) {
    if(list[0].stages) {
      // 处理 stages 对比不同 job
      var len = list[0].stages.length,
          jobsStages = Array.from(list, (l) => l.stages || []),
          stages = [];
      for(var i=0; i<len; i++){
        var stage = jobsStages.map((item,index) => item[i] || {});
        stages.push(stage);
      }
    }
    // console.log(stages)
    
    return stages || [];
  }

  getSelJobsID() {
    // console.log(Array.from(this.props.selJobs, (j) => j.id))
    return Array.from(this.props.selJobs, (j) => j.id || []);
  }

  getSelJobsNote() {
    // console.log(Array.from(this.props.selJobs, (j) => j.id))
    return Array.from(this.props.selJobs, (j) => j.meta.note || []);
  }

  getIndexs(N) {
    return Array.from(new Array(N),(val,index)=>index)
  }

  render() {
    return (
      <div className="animated fadeIn cases">
          <Nav tabs>
            {
              this.getCases().map((item,index) => 
                (
                  <NavItem key={item.name}>
                    <NavLink className={classnames({ active: this.state.activeTab === index })} onClick={() => { this.toggle(index); }}><strong>case {index+1}</strong></NavLink>
                  </NavItem>
                )
              )
            }
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
              {
              this.getCases().map((item,index) => 
                (
                  <TabPane tabId={index} key={index}>
                    <h2>Name: {item.name}</h2>

                    <h3>Summary</h3>
                    <div className="card">
                      <div className="card-header">
                        <i className="fa fa-align-justify"></i> Summary Compare Result
                      </div>
                      <div className="card-block">
                        <CompareResultTable list={this.getSummary(item.list)} ids={this.getSelJobsID()} notes={this.getSelJobsNote()} />
                      </div>
                    </div>
                    <h3>Stages</h3>
                    {
                      this.getStages(item.list).map((stage,_index) => 
                        (
                          <div className="card" key={_index}>
                            <div className="card-header">
                              <i className="fa fa-align-justify"></i> <strong>Stage {_index+1}</strong> Compare Reault
                            </div>
                            <div className="card-block">
                              <CompareResultTable list={stage} ids={this.getSelJobsID()} notes={this.getSelJobsNote()} />
                            </div>
                          </div>
                        )
                      )
                    }
                  </TabPane>
                )
              )
            }
          </TabContent>
      </div>
    )
  }

}

export default Compare;
