import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

export const darkTheme = createTheme({"palette":{"common":{"black":"#000","white":"#fff"},"background":{"paper":"rgba(26, 30, 33, 1)","default":"#fafafa"},"primary":{"light":"rgba(149, 106, 239, 1)","main":"rgba(113, 53, 240, 1)","dark":"rgba(91, 20, 240, 1)","contrastText":"#fff"},"secondary":{"light":"rgba(239, 84, 149, 1)","main":"rgba(245, 6, 107, 1)","dark":"rgba(195, 0, 82, 1)","contrastText":"#fff"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(255, 255, 255, 0.54)","disabled":"rgba(255, 255, 255, 0.38)","hint":"rgba(255, 255, 255, 0.38)"}}})

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

export const PurpleButton = styled(Button)({
  background: '#7135f0'
})


// clipPath:
//   'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)'
