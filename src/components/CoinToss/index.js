import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {head: 0, tails: 0, tossResult: 0, total: 0}
  // const tossResult = Math.floor(Math.random()

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState(prevState => ({
      tossResult,
      head: tossResult === 0 ? prevState.head + 1 : prevState.head,
      tails: tossResult === 1 ? prevState.tails + 1 : prevState.tails,
      total: prevState.total + 1,
    }))
  }

  render() {
    const {head, tails, tossResult, total} = this.state
    const imgurl =
      tossResult === 1
        ? 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    return (
      <div className="conatiner">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          <img src={imgurl} className="coin-img" alt="toss result" />
          <button type="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="results">
            <p className="text">Total:{total}</p>
            <p className="text">Heads:{head}</p>
            <p className="text">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
