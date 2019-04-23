import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';

import Root from './Root';

const testStore = createStore(() => {});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root store={testStore} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
