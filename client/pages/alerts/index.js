import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
// import PodsList from '../../components/Pods/PodsList';
// import Navbar from '../../components/navbar/navbar'
import PodDashboard from '../../components/GrafanaMonitoring/PodDashboard';
import PrometheusAlerts from '../../components/PrometheusMonitoring/PrometheusAlerts';



const AlertsPage = (props) => {
  return (
    <div className='AlertsPage'>
      <PrometheusAlerts />
    </div>
  )
}




export default AlertsPage