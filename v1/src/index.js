import 'babel-polyfill'

import React from 'react';
import { render } from 'react-dom';
import Root from './containers/root';

const rootElement = document.querySelector('#root');
if (rootElement) {
  render(<Root />, rootElement);
}
