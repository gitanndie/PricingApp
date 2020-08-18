import React from 'react';
import Header from '../components/Header';
import MainPricing from '../components/MainPricing';

class PricingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header 
          companyName="Geek Pricing App"
          navBarContent = {
            [
              {
                elementName : "Facebook",
                url: "https://facebook.com"
              },
              {
                elementName : "Twitter",
                url: "https://twitter.com"
              },
              {
                elementName : "Linkedin",
                url: "https://linkedin.com"
              },
              {
                elementName : "Instagram",
                url: "https://instagram.com"
              },
            ]
          }
        />
        <MainPricing />
      </React.Fragment>
    );
  }
}

export default PricingPage;
