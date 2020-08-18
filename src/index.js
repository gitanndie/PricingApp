import React from 'react';
import ReactDOM from 'react-dom';
import PricingPage from './containers/PricingPage';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';

//ReactDom.render (que voy a renderizar y donde?)

ReactDOM.render(
    < PricingPage />,
  document.getElementById('app-pricing')
);

