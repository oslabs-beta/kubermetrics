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
  console.log(props.services)

  props.services.forEach((service, i) => {
    servicesArray.push(
      <Service key={i} service={{...service}} />
    )
  })

  return (
    <div className='servicesList'>
      {servicesArray}
    </div>

  )
}

export default connect(mapStateToProps, null)(ServiceList);