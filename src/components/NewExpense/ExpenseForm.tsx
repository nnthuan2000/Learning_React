import React, { useState } from 'react';

import './ExpenseForm.css';
import { IExpenseItem } from '../../types/Expense';

// interface IEnteredInput {
//   enteredTitle: string;
//   enteredAmount: string;
//   enteredDate: string;
// }

interface ExpenseFormProps {
  onCancel: () => void;
  onSaveExpenseData: (expense: IExpenseItem) => void;
}

function ExpenseForm({ onCancel, onSaveExpenseData }: ExpenseFormProps) {
  const [enteredTitle, setEnteredTitle] = useState<string>('');
  const [enteredAmount, setEnteredAmount] = useState<string>('');
  const [enteredDate, setEnteredDate] = useState<string>('');

  // const [enteredInput, setenteredInput] = useState<IEnteredInput>({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
    // setenteredInput((prevState) => ({
    //   ...prevState,
    //   enteredTitle: event.target.value,
    // }));
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);

    // setenteredInput((prevState) => ({
    //   ...prevState,
    //   enteredAmount: event.target.value,
    // }));
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
    // setenteredInput((prevState) => ({
    //   ...prevState,
    //   enteredDate: event.target.value,
    // }));
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const expenseData: IExpenseItem = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            value={enteredTitle}
            type="text"
            name=""
            id=""
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            value={enteredAmount}
            type="number"
            name=""
            id=""
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            value={enteredDate}
            type="date"
            name=""
            id=""
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
