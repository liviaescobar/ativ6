import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h3>Lista de Despesas</h3>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: R$ {expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
