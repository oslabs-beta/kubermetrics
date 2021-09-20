import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import ClusterDashboard from '../../components/GrafanaMonitoring/ClusterDashboard';


const MetricsPage = (props) => {
  return (
    <div className='metricsPage'>
      <ClusterDashboard />
    </div>
  )
}

export default MetricsPage