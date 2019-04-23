import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeRounded } from '@material-ui/icons';

import IconButton from '../../../buttons/IconButton';

export default () => (
  <IconButton component={NavLink} to="/" icon={HomeRounded} exact>
    Home
  </IconButton>
);
