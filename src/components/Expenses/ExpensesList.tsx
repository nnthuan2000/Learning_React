import React from 'react';

import ExpenseItem from './ExpenseItem';
import { IExpense } from '../../types/Expense';

import './ExpensesList.css';

interface ExpenseListProps {
  filteredExpenses: IExpense[];
}

function ExpenseList({ filteredExpenses }: ExpenseListProps) {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseItem {...expense} />
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
