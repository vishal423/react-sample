import React from 'react';
import { Toolbar, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  body: {
    flexGrow: 1,
    textAlign: 'center'
  }
});

export default withStyles(styles)(({ classes }) => {
  return (
    <footer className={classes.root}>
      <Toolbar>
        <Typography className={classes.body} variant="body1" color="inherit">
          &copy; 2019
        </Typography>
      </Toolbar>
    </footer>
  );
});
