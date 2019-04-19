import React from 'react';
import { AppBar, Button, Toolbar, Typography, withStyles } from '@material-ui/core';

import Logo from '../../icons/Logo';

const styles = {
  root: {
    flexGrow: 1
  },
  brand: {
    flexGrow: 1
  },
  logo: {
    marginLeft: '-1rem',
    width: '2.5rem',
    height: '2.5rem'
  }
};

export default withStyles(styles)(({ classes }) => {
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Logo className={classes.logo} />
        <Typography className={classes.brand} variant="h6" color="inherit">
          Sample Application
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
});
