import React, { Component } from 'react';

export default OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      price: this.props.price,
      indicator: null
    };

    tick() {
      this.setState((prevState, props) => {
        const {
          price: { sell, buy }
        } = props;
        const randomSell = this.randomPrice(sell);
        const randomBuy = this.randomPrice(buy);

        console.log(randomBuy, prevState.price.buy);

        return {
          price: {
            ...props.price,
            sell: randomSell,
            buy: randomBuy
          },
          indicator: randomBuy < prevState.price.buy
        };
      });
    }

    randomPrice(value) {
      const min = value - value * 0.1;
      const max = value + value * 0.1;
      const fractLength = String(value).split('.')[1].length;

      return (Math.random() * (max - min) + min).toFixed(fractLength);
    }

    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      console.log(this.state.indicator);
      return (
        <OriginalComponent
          {...this.props}
          price={this.state.price}
          indicator={this.state.indicator}
        />
      );
    }
  };
