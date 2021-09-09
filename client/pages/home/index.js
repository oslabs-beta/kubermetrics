import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import PodsList from '../../components/Pods/PodsList';
import Navbar from '../../components/navbar/navbar'
import img from '../../assets/terminal2.png'



const HomePage = (props) => {
  return (
    <div className='homePage'>
      <Navbar></Navbar>
      <PodsList state={props.state}/>
      {/* <img src={img} className='terminal'></img> */}
     
    </div>
  )
}




export default HomePage;