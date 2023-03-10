export interface IExpenseItem {
  title: string;
  amount: number;
  date: Date;
}

export interface IExpense extends IExpenseItem {
  id: string;
}
