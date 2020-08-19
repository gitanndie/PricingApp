import React, { Component } from "react";
import PricingDetails from "./PricingDetails";

class PricingContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            card1: [
                "10 users included",
                "2 GB of storage",
                "Email support", 
                "Help center access",
            ],
            card2: [
                "20 users included",
                "10 GB of storage",
                "Priority email support",
                "Help center access",
            ],
            card3: [
                "30 users included",
                "15 GB of storage",
                "Phone and email support",
                "Help center access",
            ]

        }
    }
    render(){

    

return (
        <div className="container">
        <div className="card-deck mb-3 text-center">
        < PricingDetails />
        </div>
        </div>
        
    )
};
};

export default PricingContainer;
