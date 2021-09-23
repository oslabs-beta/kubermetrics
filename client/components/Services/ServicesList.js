/**
 * ************************************
 *
 * @module  ServicesList.js
 * @author team Kubermetrics
 * @date
 * @description React Component to contain All Services
 *
 * ************************************
 */
import React from 'react';
import { connect } from 'react-redux';
import Service from './Service';
import './ServicesList.styles.css';


// Map services to props
const mapStateToProps = state => ({
  services: state.services.services
})

const ServiceList = (props) => {
  
  // Service Array will hold all Service Elements 
  const servicesArray = [];

  // Iterate over services (passed down from homepage) and create React Component service for each
  props.services.forEach((service, i) => {
    servicesArray.push(
      <Service key={i} service={{...service}} />
    )
  })

  // Conditional Render accounting for the case in which no services are found. 

  if (!servicesArray.length) {

    return (
      <div className='servicesList'>
        <div className='miniHeadList'>
          <h4 className='miniHeadText'> Services </h4>
          <h4 className='redText'> None Found In Current Namespace </h4>
        </div>
        <div className='overflowBox'>
          <Service notLoaded={true}/>
        </div>
      </div>
    )
  }

  // Default render 
  return (
    <div className='servicesList'>
      <div className='miniHeadList'>
        <h4 className='miniHeadText'> Services </h4>
        <h4 className='greenText'> Total: {servicesArray.length} </h4>
      </div>
      <div className='overflowBox'>
        {servicesArray}
      </div>
    </div>

  )
}

export default connect(mapStateToProps, null)(ServiceList);