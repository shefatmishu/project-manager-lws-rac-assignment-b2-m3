import BalanceSummury from "./BalanceSummury";
import ExpenseList from "./ExpenseList";
import IncomeList from "./IncomeList";

export default function Content({
  expenses = [],
  incomes = [],
  handleIncomeDelete,
  handleExpenseDelete,
  handleIncomeUpdate,
  handleExpenseUpdate,
  onEdit,
}) {
  console.log({ expenses: expenses, incomes: incomes });
  return (
    <div className="lg:col-span-2">
      <BalanceSummury expenses={expenses} incomes={incomes} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <IncomeList
          expenses={expenses}
          incomes={incomes}
          handleDelete={handleIncomeDelete}
          handleUpdate={handleIncomeUpdate}
          onEdit={onEdit}
        />
        <ExpenseList
          expenses={expenses}
          incomes={incomes}
          handleDelete={handleExpenseDelete}
          handleUpdate={handleExpenseUpdate}
          onEdit={onEdit}
        />
      </div>
    </div>
  );
}
