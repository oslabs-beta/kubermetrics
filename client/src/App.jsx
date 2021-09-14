import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
// import actions from action creators file
import * as actions from '../actions/actions';
import HomePage from '../pages/home/index.js'
import MetricsPage from '../pages/metrics/index.js'
import AlertsPage from '../pages/alerts/index.js'
import TerminalPage from '../pages/terminal/index.js'
import NavRoutes from '../components/NavRoutes/index.js';
import '../styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar.js';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles';

export const darkTheme = createTheme({"palette":{"common":{"black":"#000","white":"rgba(255, 255, 255, 1)"},"background":{"paper":"rgba(26, 30, 33, 1)","default":"rgba(255, 255, 255, 1)"},"primary":{"light":"rgba(45, 53, 55, 1)","main":"rgba(17, 22, 23, 1)","dark":"rgba(13, 15, 16, 1)","contrastText":"#fff"},"secondary":{"light":"rgba(143, 96, 240, 1)","main":"rgba(113, 53, 240, 1)","dark":"rgba(96, 29, 239, 1)","contrastText":"#fff"},"error":{"light":"#e57373","main":"rgba(208, 2, 27, 1)","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(255, 255, 255, 0.54)","disabled":"rgba(255, 255, 255, 0.38)","hint":"rgba(255, 255, 255, 0.38)"}}})



function App() {
  return (
    <>
    <MuiThemeProvider theme={darkTheme}>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/metrics' exact component={MetricsPage} />
          <Route path='/alerts' exact component={AlertsPage} />
          <Route path='/terminal' exact component={TerminalPage} />

        </Switch>

        </Router>
        {/* <Switch>
          {NavRoutes.map((route) => (
            <Route exact path={route.path} key={route.path}>
              <route.component />
            </Route>
          ))}
        </Switch> */}
    </MuiThemeProvider>
      </>
  );
}

export default App;
