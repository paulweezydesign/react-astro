import React from 'react';
import Ticker from 'react-ticker';

const TickerTape = ({ ticker, move }) => {
  console.log(ticker);
  return (
    <Ticker move={move} speed={2}>
      {({ index }) => <span style={{ fontSize: '15px' }}>{ticker}</span>}
    </Ticker>
  );
};

export default TickerTape;
