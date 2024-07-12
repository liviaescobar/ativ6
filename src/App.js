import React, { useState, useEffect } from 'react';
import Balance from './components/Balance';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import BudgetCalculator from './components/BudgetCalculator';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  useEffect(() => {
    const totalExpenses = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
    setBalance(1000 - totalExpenses); // Assumindo um orçamento inicial de 1000
  }, [expenses]);

  return (
    <div className="App">
      <h1>Gerenciamento de Orçamento Pessoal</h1>
      <Balance balance={balance} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <BudgetCalculator expenses={expenses} />
    </div>
  );
}

export default App;
