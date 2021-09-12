
import React from 'react';
import * as actions from '../../actions/actions';
import HomePage from '../../pages/home/index.js'
import MetricsPage from '../../pages/metrics/index.js'
import AlertsPage from '../../pages/alerts/index.js'

const Home = () => {
  return (
    <HomePage />
  )
}

const Metrics = () => {
  return (
    <MetricsPage />
  )
}

const Alerts = () => {
  return (
    <AlertsPage />
  )
}



const NavRoutes = [
  {
    path: '/',
    sidebarName: 'Home',
    // icon: [material_ui_icon_name],
    component: Home,
  },
  {
    path: '/metrics',
    sidebarName: 'Metrics',
    // icon: [material_ui_icon_name],
    component: Metrics,
  },
  {
    path: '/alerts',
    sidebarName: 'Alerts',
    // icon: [material_ui_icon_name],
    component: Alerts,
  },
];

export default NavRoutes;