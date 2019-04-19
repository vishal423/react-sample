import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'relative',
    minHeight: '100%',
    /* adjust header and footer */
    [theme.breakpoints.up('xs')]: {
      paddingTop: '64px',
      paddingBottom: '64px'
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '56px',
      paddingBottom: '56px'
    }
  }
});

export default withStyles(styles)(({ classes, children }) => {
  return <main className={classes.root}>{children}</main>;
});
