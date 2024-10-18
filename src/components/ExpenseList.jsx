import { useState } from "react";
import ExpenseHeader from "./ExpenseHeader";
import ExpenseRow from "./ExpenseRow";

export default function ExpenseList({
  expenses = [],
  handleDelete,
  handleUpdate,
  onEdit,
}) {
  const [isLowToHigh, setIsLowToHigh] = useState(true);
  const [filter, setFilter] = useState("");
  return (
    <div className="border rounded-md">
      <ExpenseHeader
        handleSorting={setIsLowToHigh}
        filter={filter}
        handleFilter={setFilter}
      />

      <div className="p-4 divide-y">
        {expenses
          .filter((a) => a.category.includes(filter))
          .sort((a, b) =>
            isLowToHigh ? a.amount - b.amount : b.amount - a.amount
          )
          .map((i, ik) => (
            <ExpenseRow
              key={i.id}
              id={i.id}
              category={i.category}
              amount={i.amount}
              date={i.date}
              handleDelete={handleDelete}
              onEdit={onEdit}
            />
          ))}
      </div>
    </div>
  );
}
