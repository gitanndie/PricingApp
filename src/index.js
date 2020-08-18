import React from 'react';
import ReactDOM from 'react-dom';
import PricingPage from './containers/PricingPage';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
/*
ReactDOM.render( 
    ¿Qué voy a renderizar? , 
    ¿Dónde lo voy a renderizar?
);
*/
ReactDOM.render(
    <PricingPage />
    ,
    document.getElementById('app-pricing')
);

