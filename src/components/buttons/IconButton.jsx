import React from 'react';
import { Button, withStyles } from '@material-ui/core';

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit,
    fontSize: '1.5em'
  },
  activeButton: {
    color: theme.palette.secondary.main
  }
});

export default withStyles(styles)(({ component, classes, children, icon, ...rest }) => {
  const IconComponent = icon;
  return (
    <Button
      color="inherit"
      {...(component !== undefined ? { component } : {})}
      {...(component !== undefined && component.name === 'NavLink'
        ? { activeClassName: classes.activeButton }
        : {})}
      {...rest}
    >
      <IconComponent className={classes.icon} />
      {children}
    </Button>
  );
});
