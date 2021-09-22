/**
 * ************************************
 *
 * @module  index.js 
 * @author team Kubermetrics
 * @date
 * @description Alerts Page for React Router
 *
 * ************************************
 */

import React from 'react';
import PrometheusAlerts from '../../components/PrometheusMonitoring/PrometheusAlerts';



const AlertsPage = (props) => {
  return (
    <div className='alertsPage'>
      <PrometheusAlerts />
    </div>
  )
};




export default AlertsPage;