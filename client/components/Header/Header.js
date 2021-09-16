import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import * as mui from '../mui-elements'
import { connect } from 'react-redux';
import './Header.style.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as actions from '../../actions/actions';
import { StarTwoTone } from '@material-ui/icons';


const mapStateToProps = state => ({
  nodes: state.nodes.nodes,
  currentNode: state.nodes.currentNode
});

const mapDispatchToProps = dispatch => ({
  fetchNodes: async () => {
    let nodes = await actions.fetchNodes();
    dispatch(actions.getNodes(nodes));
    console.log(nodes);
  },
  changeNode: async (node) => {
    dispatch(actions.changeNode(node))
  }
});


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
    color: 'white'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color: 'white'
  },
}));

const Header = props => {
  const classes = useStyles();
  const [node, setNode] = React.useState('');

  const handleChange = (event) => {
    setNode(event.target.value);
  };

  const nodeSelect = [];

  if (props.nodes) {
    props.nodes.forEach((node) => {
      return (
        <MenuItem value={node.name}>{node.name}</MenuItem>
      )
    })
  }

  return (
    <div className='header'>
      <FormControl color='secondary' className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Current Node</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          onChange={handleChange}
        >
          {nodeSelect}
          {/* <MenuItem className='menuItem' value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
      <Button color='secondary' onClick={props.fetchNodes}>Refresh</Button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);