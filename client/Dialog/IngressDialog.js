/**
 * ************************************
 *
 * @module  IngressDialog.js
 * @author team Kubermetrics
 * @date
 * @description Dialog Box for Ingress Element
 *
 * ************************************
 */
import * as React from 'react';
import Button from '@material-ui/core/Button';
import {  } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const customStyle = {
  color: 'white',
  margin: '5px',
  padding: '5px',
}

const customStyle2 = {
  color: '#7135f0',
  margin: '5px',
  padding: '5px',
}

export default function IngressDialog(props) {

  // Utilize React Hooks to handle Opening & Closing Dialog Boxes
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Deconstruct Ingress from props - Passed down from Header.js
  const { ingress } = props;
  
  // Initialize Array for dynamic structure of component - Each path in Ingress will have its own row. 
  const pathsArr = [];

  // Conditional Statement to ensure Ingress exists - this will help avoid errors 
  // If Ingress exist, we iterate over the paths key within ingress. This is an array which will hold each specific path.

  if (ingress){
  ingress.paths.forEach((path, ind) => {
    let style = customStyle
    pathsArr.push(
    <>
    <TableRow key={ind + 1}>
    <TableCell key={ind + 2}style={style} component="th" scope="row">
      Path:  
    </TableCell>
    <TableCell key={ind + 3} style={style}>{path.path}</TableCell>
  </TableRow>
  <TableRow key={ind + 4}>
    <TableCell key={ind + 5}style={style} component="th" scope="row">
      Port:  
    </TableCell>
    <TableCell key={ind + 6} style={style}>{path.servicePort}</TableCell>
  </TableRow>
  <TableRow key={ind + 7}>
    <TableCell key ={ind + 8}style={style} component="th" scope="row">
      Service Name:  
    </TableCell>
    <TableCell key={ind + 9} style={style}>{path.serviceName}</TableCell>
  </TableRow>
  <TableRow key={ind + 10}>
    <TableCell key ={ind + 11}style={style} component="th" scope="row">
     Path Type:  
    </TableCell>
    <TableCell key={ind + 12} style={style}>{path.pathType}</TableCell>
  </TableRow>
  <TableRow key={ind + 13}>
    <TableCell key ={ind + 14}style={style} component="th" scope="row">
    </TableCell>
    <TableCell key={ind + 15} style={style}></TableCell>
  </TableRow>
  </>
    )
  })
  }

  // Return Button that will open dialog box

  return (
    <div>
      <Button variant="contained" size='small' color='secondary' onClick={handleClickOpen}>
        Ingress
      </Button>
      <Dialog
        style={customStyle}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" style={customStyle} onClose={handleClose}>
          <center>Ingress Information</center>
        </DialogTitle>
        <DialogContent dividers>
          <TableContainer component={Paper}>
            <Table  sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell style={customStyle}>Key</TableCell>
                  <TableCell style={customStyle}>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pathsArr}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button style={customStyle} autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}