import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {  } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/paper';

const customStyle = {
  color: 'white',
  margin: '5px',
  padding: '5px',
}


const customStyle2 = {
  color: 'rgb(0, 255, 0)',
  margin: '5px',
  padding: '5px',
}

export default function ServiceDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { service } = props;
  let portsArr = [];

  service.allData.spec.ports.forEach((port, ind) => {
    <>
    <TableRow key={ind + 120}>
    <TableCell key ={ind + 110}style={customStyle} component="th" scope="row">
      P{ind + 1} Port Name:  
    </TableCell>
    <TableCell key={ind + 150} style={customStyle}>{port.name}</TableCell>
  </TableRow>
  <TableRow key={ind + 220}>
    <TableCell key ={ind + 210}style={customStyle} component="th" scope="row">
      P{ind + 1} Port:  
    </TableCell>
    <TableCell key={ind + 250} style={customStyle}>{port.port}</TableCell>
  </TableRow>
  <TableRow key={ind + 320}>
    <TableCell key ={ind + 310}style={customStyle} component="th" scope="row">
      P{ind + 1} Protocol:  
    </TableCell>
    <TableCell key={ind + 350} style={customStyle}>{port.protocol}</TableCell>
  </TableRow>
  </>
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
                      Selector:  
                    </TableCell>
                    <TableCell style={customStyle}>{service.selector.app}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Cluster IP:  
                    </TableCell>
                    <TableCell style={customStyle}>{service.allData.spec.clusterIP}</TableCell>
                  </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}