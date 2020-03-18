import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
//iterate thru stocks array, check if stock.id is included in portfolio array if so render it 
  renderStocks = () => {
    return this.props.portfolio.map((stock, idx) => {
        return <Stock key={idx} stock={stock} addPortfolio={this.props.addPortfolio} removePortfolio={this.props.removePortfolio}/>
    })
  }

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.renderStocks()
          }
      </div>
    );
  }

}

export default PortfolioContainer;
