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

export default function DeploymentDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { deployment } = props;

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
          <center>Deployment Info</center>
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
                      Deployment Name: 
                    </TableCell>
                    <TableCell style={customStyle}>{deployment.name}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Replicas: 
                    </TableCell>
                    <TableCell style={customStyle2}>{deployment.replicas}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      UID: 
                    </TableCell>
                    <TableCell style={customStyle}>{deployment.uid}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                     Created:  
                    </TableCell>
                    <TableCell style={customStyle}>{deployment.created}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Strategy Type:  
                    </TableCell>
                    <TableCell style={customStyle}>{deployment.strategy.type}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      DNS Policy:  
                    </TableCell>
                    <TableCell style={customStyle}>{deployment.template.spec.dnsPolicy}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Restart Policy:  
                    </TableCell>
                    <TableCell style={customStyle}>{deployment.template.spec.restartPolicy}</TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell style={customStyle} component="th" scope="row">
                      Scheduler Name:  
                    </TableCell>
                    <TableCell style={customStyle}>{deployment.template.spec.schedulerName}</TableCell>
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