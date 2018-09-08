import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './App';

import Global from './utils/global-styles';
import theme from './utils/theme';
import { ThemeProvider } from 'styled-components';

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Global>
        <Router>
          <App />
        </Router>
      </Global>
    </ThemeProvider>
  </Provider>
);

export default Root;
