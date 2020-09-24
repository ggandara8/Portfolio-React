import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
     fontFamily: "'Yanone Kaffeesatz', sans-serif"
  },
});

ReactDOM.render(
  <React.StrictMode>
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
