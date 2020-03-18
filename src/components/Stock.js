import React from 'react'

const Stock = (props) => {
  const {id, ticker, name, type, price} = props.stock
  // console.log(props.stock)
  
  
  return (
    
  <div>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title" onClick={() => props.addPortfolio? props.addPortfolio(props.stock): props.removePortfolio(props.stock)} >{
            name
          }</h5>
        <p className="card-text">{
            ticker + ': '+  price
          }</p>
      </div>
    </div>


  </div>
    
  )
}

export default Stock


// "id": 1,
//       "ticker" :"GOOG",
//       "name": "Google",
//       "type": "Tech",
//       "price": 1194.80
//     },