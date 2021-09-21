import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Service from './Service';
import './ServicesList.styles.css';

const mapStateToProps = state => ({
  services: state.services.services
})

const ServiceList = (props) => {
  const servicesArray = [];

  props.services.forEach((service, i) => {
    servicesArray.push(
      <Service key={i} service={{...service}} />
    )
  })

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