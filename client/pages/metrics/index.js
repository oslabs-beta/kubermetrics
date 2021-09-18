import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Graph from '../../components/Charts/Testgraph'



const MetricsPage = (props) => {
  return (
    <div className='MetricsPage'>
      <Graph></Graph>
    </div>
  )
}




export default MetricsPage