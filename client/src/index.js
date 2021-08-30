import '@babel/polyfill';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// function App () {
//   return (
//     <div>Whatever</div>
//   )
// }

// export default App;