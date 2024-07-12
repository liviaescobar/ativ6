import React from 'react';

const BudgetCalculator = ({ expenses }) => {
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div>
      <h3>Total de Despesas: R$ {totalExpenses.toFixed(2)}</h3>
      <h3>Orçamento Restante: R$ {(1000 - totalExpenses).toFixed(2)}</h3>
    </div>
  );
};

export default BudgetCalculator;
