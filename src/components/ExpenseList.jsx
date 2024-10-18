import ExpenseHeader from "./ExpenseHeader";
import ExpenseRow from "./ExpenseRow";

export default function ExpenseList() {
  return (
    <div className="border rounded-md">
      <ExpenseHeader />

      <div className="p-4 divide-y">
        <ExpenseRow />
      </div>
    </div>
  );
}
