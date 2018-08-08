## FX Trading App

Build the following application using HTML, Javascript & CSS. You may use any other non-commercial libraries you wish.

> Note, using the exact colours and dimensions are not important, but please try to make your app look similar to the images below.

### Installation

```bash
git clone git@github.com:s-mikhailov/ui_excercise_2_trading.git
yarn install
yarn start
```

### Tasks

1.  Build this panel as a component:

    ![](https://raw.githubusercontent.com/s-mikhailov/ui_excercise_2_trading/master/assets/img1.png)

2.  Now layout multiple panels as follows:

    ![](https://raw.githubusercontent.com/s-mikhailov/ui_excercise_2_trading/master/assets/img2.png)

The datasource is:

```json
[
  { "pair": "USD CHF", "buy": 0.99143, "sell": 0.99043 },
  { "pair": "GBP USD", "buy": 1.28495, "sell": 1.2836 },
  { "pair": "GBP CHF", "buy": 1.27378, "sell": 1.27147 },
  { "pair": "EUR SEK", "buy": 9.632, "sell": 9.6055 },
  { "pair": "USD JPY", "buy": 110.467, "sell": 110.417 },
  { "pair": "EUR JPY", "buy": 120.589, "sell": 120.491 }
]
```

3.  On hovering the mouse over the left price indicator, change the colour to red with a blue border. On hovering the mouse over the right price indicator, change the colour to green with a blue border.

    ![](https://raw.githubusercontent.com/s-mikhailov/ui_excercise_2_trading/master/assets/img31.png)

    ![](https://raw.githubusercontent.com/s-mikhailov/ui_excercise_2_trading/master/assets/img32.png)

4.  To test your app, you should write a test harness that changes the prices randomly every 1 second to within +/- 10% of the original value. If the buy price increases, show a green upwards facing arrow between the two price indicators. If the buy price decreases, show a red downwards facing arrow.

    ![](https://raw.githubusercontent.com/s-mikhailov/ui_excercise_2_trading/master/assets/img41.png)

    ![](https://raw.githubusercontent.com/s-mikhailov/ui_excercise_2_trading/master/assets/img42.png)
