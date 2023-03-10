import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

import { IExpense } from '../../types/Expense';

import './Expenses.css';

interface ExpenseProps<T> {
  items: T[];
}

function Expenses({ items }: ExpenseProps<IExpense>) {
  const [filteredYear, setFilteredYear] = useState<string>('2020');

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
