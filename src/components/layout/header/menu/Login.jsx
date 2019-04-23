import React from 'react';
import { Link } from '@material-ui/core';
import { ExitToAppRounded } from '@material-ui/icons';

import IconButton from '../../../buttons/IconButton';

export default () => (
  <Link href="oauth2/authorization/oidc" color="inherit">
    <IconButton icon={ExitToAppRounded}>Login</IconButton>
  </Link>
);
