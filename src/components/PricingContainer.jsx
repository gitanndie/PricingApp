import React, { Component } from 'react';
import PricingDetails from './PricingDetails'
class PricingContainer extends Component {
    constructor (props){
        super(props);
        this.state = {
        card1: ["10 users included", "2 gb of storage", "Email support", "Help center access"],
        card2: ["20 users included", "10 gb of storage", "Priority emaol support","Help center access"],
        card3: ["30 users included", "gb of storage", "Email support", "Help center access"],
        }
    }

    render() {
        return (
        <div className='container'>
            <div className='card-deck mb-3 text-center'>
            <PricingDetails textoButton="Sing up for free" precio="0" plan="Free" items={this.state.card1}/>
            <PricingDetails textoButton="Get Started" precio="25" plan="Pro" items={this.state.card2}/>
            <PricingDetails textoButton="Contact Us" precio="29" plan="Enterprise" items={this.state.card3}/>
            </div>
        </div>
        );
    }
    };

export default PricingContainer;