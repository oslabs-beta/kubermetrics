/**
 * ************************************
 *
 * @module  Sidebar.js
 * @author team Kubermetrics
 * @date
 * @description React Component for Sidebar & Top Bar 
 *
 * ************************************
 */
import React from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';




function Sidebar(props) {

  return (
    <>
    <IconContext.Provider value = {{ color: '#7135f0' }}>

    <nav className='nav-menu'>
      <ul className='nav-menu-items'>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                <p className='icon'>{item.icon}</p>
                <span className='sideLink'>{item.title}</span>
              </Link>
            </li>
          );
        })};
      </ul>
    </nav>
   </IconContext.Provider>
   </>
  );
};

export default Sidebar;