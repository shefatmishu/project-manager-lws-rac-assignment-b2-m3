import { useState } from "react";
import IncomeHeader from "./IncomeHeader";
import IncomeRow from "./IncomeRow";

export default function IncomeList({
  incomes = [],
  handleDelete,
  handleUpdate,
  onEdit,
}) {
  const [isLowToHigh, setIsLowToHigh] = useState(true);
  const [filter, setFilter] = useState("");
  return (
    <div className="border rounded-md relative">
      <IncomeHeader
        handleSorting={setIsLowToHigh}
        filter={filter}
        handleFilter={setFilter}
      />

      <div className="p-4 divide-y">
        {incomes
          .filter((a) => a.category.includes(filter))
          .sort((a, b) =>
            isLowToHigh ? a.amount - b.amount : b.amount - a.amount
          )
          .map((i, ik) => (
            <IncomeRow
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
