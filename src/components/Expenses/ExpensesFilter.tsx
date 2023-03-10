import React from 'react';

import './ExpensesFilter.css';

interface ExpenseFilterProps {
  selectedYear: string;
  onChangeFilter: (year: string) => void;
}

function ExpenseFilter({ selectedYear, onChangeFilter }: ExpenseFilterProps) {
  const dropdownChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="">Filter by year</label>
        <select value={selectedYear} name="" id="" onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
