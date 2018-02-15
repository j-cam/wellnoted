import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/app';
import {IntlProvider, FormattedDate} from 'react-intl';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <IntlProvider locale="en">
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
