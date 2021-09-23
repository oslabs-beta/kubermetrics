/**
 * ************************************
 *
 * @module  ServiceDialog.js
 * @author team Kubermetrics
 * @date
 * @description Dialog Box for Service Element
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


export default function ServiceDialog(props) {

  // Utilize React Hooks to handle opening and closing of dialog box

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Deconstruct service passed down from Service Element 
  const { service } = props;

  // Initialize ports Array that will contain all Table Rows & Cells for each port contained in the service
  const portsArr = [];

  service.allData.spec.ports.forEach((port, ind) => {
    portsArr.push(
    <>
    <TableRow key={"port1" + ind}>
    <TableCell key={"port2" + ind}style={customStyle} component="th" scope="row">
      P{ind + 1} Port Name:  
    </TableCell>
    <TableCell key={"port3" + ind} style={customStyle}>{port.name}</TableCell>
  </TableRow>
  <TableRow key={"port4" + ind}>
    <TableCell key={"port5" + ind}style={customStyle} component="th" scope="row">
      P{ind + 1} Port:  
    </TableCell>
    <TableCell key={"port6" + ind} style={customStyle}>{port.port}</TableCell>
  </TableRow>
  <TableRow key={"port7" + ind}>
    <TableCell key ={"port8" + ind}style={customStyle} component="th" scope="row">
      P{ind + 1} Protocol:  
    </TableCell>
    <TableCell key={"port9" + ind} style={customStyle}>{port.protocol}</TableCell>
  </TableRow>
  </>
    )
  })

  return (
    <div>
      <Button variant="contained" size='small' color='secondary' onClick={handleClickOpen}>
        More Info
      </Button>
      <Dialog
        style={customStyle}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" style={customStyle} onClose={handleClose}>
          <center>Service Info</center>
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
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Service Name: 
                    </TableCell>
                    <TableCell style={customStyle}>{service.name}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Type: 
                    </TableCell>
                    <TableCell style={customStyle}>{service.type}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                     UID:  
                    </TableCell>
                    <TableCell style={customStyle}>{service.id}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Created:  
                    </TableCell>
                    <TableCell style={customStyle}>{service.created}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Cluster IP:  
                    </TableCell>
                    <TableCell style={customStyle}>{service.allData.spec.clusterIP}</TableCell>
                  </TableRow>
                {portsArr}
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