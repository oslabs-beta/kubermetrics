import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import './Service.styles.css';
import * as mui from '../mui-elements';


const { ServiceElement } = mui;

const Service = (props) => {
  return (
    <div className='serviceContainer'>
      <ServiceElement>
        <CardContent>
          <div>
            <p className='serviceLabel'>{props.service.name}</p>
            <center><Button color='secondary' variant='contained' size='small'>MORE INFO</Button></center>
          </div>
        </CardContent>
      </ServiceElement>
    </div>
  )
};

export default Service;

