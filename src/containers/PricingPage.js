//1. componentes como Clases
//2. Componentes como funciones
//2.1 Stateless ->Sin estado
//2.2 statefull ->con estado
import React from 'react';
import Header from '../components/Header';
import MainPricing from '../components/MainPricing';

class PricingPage extends React.Component {

    render(){
        return(
            <React.Fragment>
                <Header />
                <MainPricing />
            </React.Fragment>
        );
    }
}

export default PricingPage;