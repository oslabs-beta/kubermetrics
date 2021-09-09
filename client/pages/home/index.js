import { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import PodsList from '../../components/Pods/PodsList';



const HomePage = (props) => {
  return (
    <div className='homePage'>
      <PodsList state={props.state}/>
    </div>
  )
}




export default HomePage;