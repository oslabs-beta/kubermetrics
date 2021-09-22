/**
 * ************************************
 *
 * @module  SidebarData.js
 * @author team Kubermetrics
 * @date
 * @description Array containing The Icons & Paths for Sidebar 
 *
 * ************************************
 */
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome className='icons' />,
    cName: 'nav-text'
  },
  {
    title: 'Metrics',
    path: '/metrics',
    icon: <FaIcons.FaChartBar className='icons' />,
    cName: 'nav-text'
  },
  {
    title: 'Alerts',
    path: '/alerts',
    icon: <AiIcons.AiFillAlert className='icons' />,
    cName: 'nav-text'
  },
];