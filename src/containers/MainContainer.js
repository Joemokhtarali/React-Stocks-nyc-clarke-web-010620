import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'


const API = 'http://localhost:3000/stocks'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    ShowStocks: [],
  }

  componentDidMount() {
    fetch(API).then(resp => resp.json()).then(data => {this.setState({stocks: data, ShowStocks: data})})
  }

  // addPortfolio = stock => {
  //   this.setState({
  //     portfolio: [...this.state.portfolio, stock]
  //   })
  // }

  addPortfolio = (stock) => {
    this.setState({
      portfolio: [...this.state.portfolio, stock]
    })}

    removePortfolio = (stock) => {
      this.setState({
        portfolio: this.state.portfolio.filter(s => s !== stock)
      })
    }

    filterStocks = (type) => {
      if (type !== 'All') {
        this.setState({
          ShowStocks: this.state.stocks.filter(s=> s.type === type)
        })
      } else {
        this.setState({
          ShowStocks: this.state.stocks
        })
      }
    }

    sortStocks = (event) => {
      if (event === "Alphabetically") {
        this.setState({
          ShowStocks: this.state.ShowStocks.sort((a, b) => a.name > b.name ? 1 : -1)
        })
      } else if (event === 'Price') {
        this.setState({
          ShowStocks: this.state.ShowStocks.sort((a, b) => a.price > b.price ? 1 : -1)
        })
      } else {
        this.setState({
          ShowStocks: this.state.stocks
        })
      }
    }
  
  // addPortfolio = (id) => {
  //   let portfolioCopy = [...this.state.portfolio]
  //   if(!portfolioCopy.includes(id)) {
  //     this.setState({
  //       portfolio: [...portfolioCopy, id]
  //      }, console.log(this.state.portfolio)
  //     )
  //   }
  // }

  // removeStock = (id) => {
  //   let portfolioCopy = [...this.state.portfolio]
  //   let foundStockIdx = portfolioCopy.findIndex(indx => {
  //     return indx === id
  //   })
  //   portfolioCopy.splice(foundStockIdx , 1)
  //   this.setState({
  //     portfolio: portfolioCopy
  //   })
  // }



  render() {
    
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} sortStocks={this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.ShowStocks} addPortfolio={this.addPortfolio} removePortfolio={this.removePortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} removeStock={this.removeStock} removePortfolio={this.removePortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
