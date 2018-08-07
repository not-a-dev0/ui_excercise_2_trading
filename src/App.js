import React, { Component } from 'react';
import Card from './Card';
import './App.css';

class App extends Component {
  state = { prices: [] };

  componentDidMount() {
    const url = 'http://www.mocky.io/v2/5b68d5923300008a3a32ddb4';

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ prices: data }))
      .catch(error => console.log(error));
  }

  renderCards() {
    const { prices } = this.state;
    return prices.map(price => <Card key={price.pair} price={price} />);
  }

  render() {
    return <div className="wrapper">{this.renderCards()}</div>;
  }
}

export default App;
