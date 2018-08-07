import React, { Component } from 'react';
import './Card.css';

const renderPrice = (price, index) => {
  if (index > 5) {
    return (
      <sup className="price__value--sup" key={index}>
        {price}
      </sup>
    );
  }
  if (index > 3) {
    return (
      <b className="price__value--strong" key={index}>
        {price}
      </b>
    );
  }
  return price;
};

class Card extends Component {
  state = {
    isHoveredSell: false,
    isHoveredBuy: false
  };

  handleHover = value => {
    const valueToUpper = value[0].toUpperCase() + value.slice(1);

    this.setState(prevState => {
      return {
        [`isHovered${valueToUpper}`]: !prevState[`isHovered${valueToUpper}`]
      };
    });
  };

  render() {
    const {
      price: { pair, sell, buy }
    } = this.props;

    const pairArr = pair.split(' ');
    const sellToArr = String(sell).split('');
    const buyToArr = String(buy).split('');

    return (
      <div className="card">
        <h2 className="card__title">{pair}</h2>

        <div className="card__wrapper">
          <div
            className={`price price--sell ${this.state.isHoveredSell &&
              'price--sell--hover'} ${this.state.isHoveredBuy &&
              'price--gray'}`}
            onMouseEnter={() => this.handleHover('sell')}
            onMouseLeave={() => this.handleHover('sell')}
          >
            <div className="price__title">Sell {pairArr[0]}</div>
            <div className="price__value">
              {sellToArr.map((sell, index) => renderPrice(sell, index))}
            </div>
          </div>

          <div className="card__arrow">&#x25B4;</div>

          <div
            className={`price price--buy ${this.state.isHoveredBuy &&
              'price--buy--hover'} ${this.state.isHoveredSell &&
              'price--gray'}`}
            onMouseEnter={() => this.handleHover('buy')}
            onMouseLeave={() => this.handleHover('buy')}
          >
            <div className="price__title">Buy {pairArr[1]}</div>
            <div className="price__value">
              {buyToArr.map((buy, index) => renderPrice(buy, index))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
