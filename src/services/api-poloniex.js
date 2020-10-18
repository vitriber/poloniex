const Poloniex = require ('poloniex-api-node');
let poloniex = new Poloniex();


const ticker = poloniex.returnTicker(function (err, ticker) {
  if (err) {
    console.log(err.message);
    console.log('Entrei aqui!');
  } else {
    console.log(ticker);
    return(ticker);
  }
});

export default ticker;
