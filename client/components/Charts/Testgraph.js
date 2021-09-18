import React, { Component } from 'react';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';

let myDashboard = {
  /* Graphset array */
  graphset: [{ /* Object containing chart data */
      type: 'line',
      
      /* Size your chart using height/width attributes */
      height: '200px',
      width: '100%',
      /* Position your chart using x/y attributes */
      x: '5%',
      y: '5%',
      series: [{
          values: [76, 23, 15, 85, 13]
        },
        {
          values: [36, 53, 65, 25, 45]
        }
      ]
    },
    { /* Object containing chart data */
      type: 'funnel',
      height: '55%',
      width: '50%',
      x: '5%',
      y: '200px',
      series: [{
          values: [30]
        },
        {
          values: [15]
        },
        {
          values: [5]
        },
        {
          values: [3]
        }
      ]
    },
    {
      type: 'pie',
      height: '55%',
      width: '50%',
      x: '50%',
      y: '200px',
      series: [{
          values: [15]
        },
        {
          values: [30]
        },
        {
          values: [34]
        }
      ]
    }
  ]
};

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        type: 'bar',
        "globals": {
          "font-family": "Roboto",
          'background-color': "#424242",
          'color': "white",
          'border-radius': '10px',
        },
        "utc": true,
        "title": {
          "text": "Cluster Health",
          "font-size": "24px",
          "adjust-layout": true
        },

        series: [{
          values: [4,5,3,4,5,3,5,4,11]
        }]
      }
    }
  }
  render() {
    return (
      <div className='graphContainer'>
        <ZingChart data={this.state.config}/>
      </div>
    );
  }

}

export default Graph;