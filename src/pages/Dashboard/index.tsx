import React, { useState, useEffect } from 'react';

import $ from 'jquery';

import logoImg from '../../assets/logo.png';

import { TableCoins } from '../../components/Table';

import { Title } from './styles';

interface Coin {
  coin: {
    id: number;
    last: number;
    lowestAsk: string;
    highestBid: number;
    percentChange: number;
    baseVolume: number;
    quoteVolume: number;
    isFrozen: number;
    high24hr: number;
    low24hr: number;
  };
}

const Dashboard: React.FC = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    $.ajax({
      type: 'GET',
      url: 'https://poloniex.com/public?command=returnTicker',
      dataType: 'JSON',
      success(response) {
        setCoins(response);
      },
    });
  }, [coins]);

  console.log(coins);
  return (
    <>
      <img src={logoImg} alt="Poloniex" />
      <Title>Explore as moedas no Poloniex</Title>

      <TableCoins rows={coins} />
    </>
  );
};

export default Dashboard;
