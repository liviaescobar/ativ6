import React from 'react';

const Balance = ({ balance }) => {
  return (
    <div>
      <h2>Saldo: R$ {balance.toFixed(2)}</h2>
    </div>
  );
};

export default Balance;
