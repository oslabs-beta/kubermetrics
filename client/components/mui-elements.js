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
  clipPath:
  'circle(40%)',
});

// clipPath:
//   'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)'
