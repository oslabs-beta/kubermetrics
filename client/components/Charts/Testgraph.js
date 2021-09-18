import React from 'react';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        type: 'bar',
        series: [{
          values: [4,5,3,4,5,3,5,4,11]
        }]
      }
    }
  }
  render() {
    return (
      <div >
        <ZingChart data={this.state.config}/>
      </div>
    );
  }

}

export default Graph;