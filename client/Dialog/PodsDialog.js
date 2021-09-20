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

export default function PodDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { pod } = props;
  const containerArr = [];

  if (pod.containers){
  pod.containers.forEach((container, ind) => {
    containerArr.push(
      <TableRow key={ind + 30}>
      <TableCell key={ind + 10} style={customStyle} component="th" scope="row">
        Container {ind + 1}:  
      </TableCell>
      <TableCell key={ind + 20} style={customStyle}>{container.image}</TableCell>
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
          <center>Pod Info</center>
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
                      Pod Name: 
                    </TableCell>
                    <TableCell style={customStyle}>{pod.podName}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Api Version: 
                    </TableCell>
                    <TableCell style={customStyle}>{pod.apiVersion}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Node Name: 
                    </TableCell>
                    <TableCell style={customStyle}>{pod.nodeName}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Namespace:  
                    </TableCell>
                    <TableCell style={customStyle}>{pod.namespace}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Created:  
                    </TableCell>
                    <TableCell style={customStyle}>{pod.created}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Service Account:  
                    </TableCell>
                    <TableCell style={customStyle}>{pod.serviceAccount}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Service Account Name:  
                    </TableCell>
                    <TableCell style={customStyle}>{pod.serviceAccountName}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Host IP:  
                    </TableCell>
                    <TableCell style={customStyle}>{pod.hostIP}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Pod IP:  
                    </TableCell>
                    <TableCell style={customStyle}>{pod.podIP}</TableCell>
                  </TableRow>
                  {containerArr}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button style={customStyle}  autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}