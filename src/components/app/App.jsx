import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header, Footer, Main } from 'components/layout';

export default () => {
  return (
    <Router>
      <Header />
      <Main>
        <Footer />
      </Main>
    </Router>
  );
};
