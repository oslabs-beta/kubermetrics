/**
 * ************************************
 *
 * @module  index.js 
 * @author team Kubermetrics
 * @date
 * @description Metrics Page Element for React Router
 *
 * ************************************
 */
import React from 'react';
import ClusterDashboard from '../../components/GrafanaMonitoring/ClusterDashboard';


const MetricsPage = (props) => {
  return (
    <div className='metricsPage'>
      <ClusterDashboard />
    </div>
  )
}

export default MetricsPage