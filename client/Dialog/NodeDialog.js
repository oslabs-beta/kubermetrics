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
import Paper from '@material-ui/core/Paper';

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

export default function NodeDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { node } = props;
  const addressArr = [];


  if (node.addresses){
  node.addresses.forEach((address, ind) => {
    addressArr.push(
      <TableRow key={"address" + ind} >
      <TableCell key={"address2" + ind} style={customStyle} component="th" scope="row">
        {address.type}: 
      </TableCell>
      <TableCell key={"address3" + ind} style={customStyle}>{address.address}</TableCell>
    </TableRow>
    )
  })
}


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
          <center>Current Node Info</center>
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
                      Node Name: 
                    </TableCell>
                    <TableCell style={customStyle}>{node.name}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Hostname: 
                    </TableCell>
                    <TableCell style={customStyle}>{node.hostname}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                     Operating System:  
                    </TableCell>
                    <TableCell style={customStyle}>{node.os}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Created:  
                    </TableCell>
                    <TableCell style={customStyle}>{node.created}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Unique ID:  
                    </TableCell>
                    <TableCell style={customStyle}>{node.uid}</TableCell>
                  </TableRow>

                {addressArr}

                <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Allocatable CPU:  
                    </TableCell>
                    <TableCell style={customStyle}>{node.allocatable.cpu}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Allocatable Ephemeral-Storage:  
                    </TableCell>
                    <TableCell style={customStyle}>{node.allocatable["ephemeral-storage"]}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Allocatable Ephemeral-Storage:  
                    </TableCell>
                    <TableCell style={customStyle}>{node.allocatable["ephemeral-storage"]}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Allocatable memory:  
                    </TableCell>
                    <TableCell style={customStyle}>{node.allocatable.memory}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Allocatable pods:  
                    </TableCell>
                    <TableCell style={customStyle}>{node.allocatable.pods}</TableCell>
                  </TableRow>


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