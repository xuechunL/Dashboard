import React, { Component } from 'react';
import TootTipChart from './line_multi_tooltip/line_multi_garbage_tooltip.js';

class BytesLineChart extends Component {
	constructor(props) {
    super(props);
  }

	render() {
    return (
    	<div id="line-multi-bytes">
    		<TootTipChart data={this.props.data} ids={this.props.ids} />
    	</div>
    )
  }
}

export default BytesLineChart;