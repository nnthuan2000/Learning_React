import React from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

import { IExpenseItem } from '../../types/Expense';

import './ExpenseItem.css';

function ExpenseItem(props: IExpenseItem) {
  // const [title, setTitle] = useState<string>(props.title);

  // const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   setTitle('Updated');
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
