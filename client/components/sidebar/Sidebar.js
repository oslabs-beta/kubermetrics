import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import Ingress from '../dialog-box';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  ingresses: state.ingresses.ingresses,
})

function Sidebar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value = {{ color: '#7135f0' }}>
      <div className='sidebar'>

        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars className='icons'/>
        </Link>
        <h3>Kubermetrics</h3>
        <div>
          <Ingress ingresses={props.ingresses}/>
        </div>
      </div>

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

export default connect(mapStateToProps, null)(Sidebar);