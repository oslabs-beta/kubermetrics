import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
// import HomePage from '../../pages/home/index.js'
// import MetricsPage from '../../pages/metrics/index.js'
// import AlertsPage from '../../pages/alerts/index.js'
// import TerminalPage from '../../pages/terminal/index.js'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Metrics',
    path: '/metrics',
    icon: <FaIcons.FaChartBar />,
    cName: 'nav-text'
  },
  {
    title: 'Alerts',
    path: '/alerts',
    icon: <AiIcons.AiFillAlert />,
    cName: 'nav-text'
  },
  {
    title: 'Terminal',
    path: '/terminal',
    icon: <FaIcons.FaTerminal />,
    cName: 'nav-text'
  },
];