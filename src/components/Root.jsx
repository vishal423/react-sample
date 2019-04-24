import React from 'react';
import { Provider } from 'react-redux';

import { withStyles, CssBaseline } from '@material-ui/core';

import App from 'components/app/App';

const styles = {
  '@global': {
    'html, body, #root': {
      minHeight: '100%',
      height: '100%'
    }
  }
};

export default withStyles(styles)(({ store }) => (
  <>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </>
));
