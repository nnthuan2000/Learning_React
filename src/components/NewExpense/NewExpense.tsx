import { useState } from 'react';
import { IExpenseItem, IExpense } from '../../types/Expense';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

interface NewExpenseProps {
  onAddExpense: (expense: IExpense) => void;
}

function NewExpense({ onAddExpense }: NewExpenseProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const saveExpenseDataHandler = (enteredExpenseData: IExpenseItem): void => {
    const newExpense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(newExpense);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
      )}
    </div>
  );
}

export default NewExpense;
