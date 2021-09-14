import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';


export const PodElement = styled(Card)({
  display: 'flex',
  width: '200px',
  height: '200px',
  color: 'white',
  backgroundColor: '#3b3d41',
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  flexDirection: 'column',
  padding: '45px',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '10px',
  marginRight: '10px',
  clipPath:
  'circle(50%)',
});

export const DeploymentElement = styled(Card)({
  display: 'flex',
  width: '200px',
  height: '200px',
  color: 'white',
  marginLeft: '10px',
  marginRight: '10px',
  backgroundColor: '#3b3d41',
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  flexDirection: 'column',
  padding: '45px',
  justifyContent: 'center',
  alignItems: 'center',
  clipPath:
  'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
});

// clipPath:
//   'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)'
