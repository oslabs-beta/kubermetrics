import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import './Header.style.css'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as actions from '../../actions/actions';
import IngressDialog from '../../Dialog/IngressDialog';


const mapStateToProps = state => ({
  nodes: state.nodes.nodes,
  currentNode: state.nodes.currentNode,
  namespaces: state.namespaces.namespaces,
  currentNamespace: state.namespaces.currentNamespace,
  ingresses: state.ingresses.ingresses
});

const mapDispatchToProps = dispatch => ({
  fetchNodes: async () => {
    let nodes = await actions.fetchNodes();
    dispatch(actions.getNodes(nodes));
  },
  changeNode: async (node) => {
    dispatch(actions.changeNode(node))
  },
  changeNamespace: async (namespace) => {
    
    let newPods = await actions.fetchCustomPods(namespace);
    let newServices = await actions.fetchCustomServices(namespace);
    let newDeployments = await actions.fetchCustomDeployments(namespace);
    dispatch(actions.changeNamespace(namespace));
    dispatch(actions.getPods(newPods));
    dispatch(actions.getServices(newServices));
    dispatch(actions.getDeployments(newDeployments))


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

  const handleChangeNode = (event) => {
    props.changeNode(event.target.value);
  };

  const handleChangeNamespace = (event) => {
    props.changeNamespace(event.target.value);
  };

  const nodeSelect = [];
  const namespaceSelect = [];

  if (!props.namespaces.length) {
    namespaceSelect.push(<MenuItem key={123} style={{color: 'white'}} value={props.currentNamespace.name}>{props.currentNamespace.name}</MenuItem>)
  }


    props.nodes.forEach((node, ind) => {
      nodeSelect.push(<MenuItem key={ind} style={{color: 'white'}} value={node.name}>{node.name}</MenuItem>)
    })

    props.namespaces.forEach((namespace, ind) => {
      namespaceSelect.push(<MenuItem key={ind + 1000 + 'n'} style={{color: 'white'}} value={namespace.name}>{namespace.name}</MenuItem>)
    })


  return (
    <div className='header'>
      <FormControl color='secondary' className={classes.formControl}>
        <InputLabel id="node-select">Current Node</InputLabel>
        <Select
          style={{color: 'white'}}
          color='secondary'
          labelId="node-select"
          id="node-select"
          value={props.currentNode.name}
          onChange={handleChangeNode}
        >
          {nodeSelect}
        </Select>
      </FormControl>

      <FormControl color='secondary' className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" >Current Namespace</InputLabel>
        <Select
          style={{color: 'white'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.currentNamespace.name}
          onChange={handleChangeNamespace}
        >
          {namespaceSelect}
        </Select>
      </FormControl>
      
      <Button color='secondary' onClick={props.fetchNodes}>Refresh</Button>
      
     <div className='ingressButton'><IngressDialog className='ingressButton' ingress={props.ingresses[0]} /></div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);