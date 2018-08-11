import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';
//import store from './store';

ReactDOM.render(<MuiThemeProvider><Root /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
