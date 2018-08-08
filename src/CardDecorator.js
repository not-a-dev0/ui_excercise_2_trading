import React, { Component } from 'react';

export default OriginalComponent =>
  class DecoratedComponent extends Component {
    state = {
      price: this.props.price,
      indicator: null
    };

    tick() {
      this.setState(
        (prevState, props) => {
          const {
            price: { sell, buy }
          } = props;

          return {
            price: {
              ...props.price,
              sell: this.randomPrice(sell),
              buy: this.randomPrice(buy)
            }
          };
        },
        () =>
          this.setState({
            indicator: this.state.price.buy >= this.props.price.buy
          })
      );
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
      return (
        <OriginalComponent
          {...this.props}
          price={this.state.price}
          indicator={this.state.indicator}
        />
      );
    }
  };
