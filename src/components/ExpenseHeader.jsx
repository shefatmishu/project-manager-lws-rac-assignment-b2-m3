import { useState } from "react";
import ExpenseFiltering from "./ExpenseFiltering";
import ExpenseSorting from "./ExpenseSorting";
import ExpenseIconSvg from "./ui-SVG-component/ExpenseIconSvg";

export default function ExpenseHeader(handleSorting, filter, handleFilter) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">
          <ExpenseIconSvg />
        </div>

        <div>
          <h3 className="text-xl font-semibold leading-7 text-gray-800">
            Expense
          </h3>
        </div>
      </div>

      <div>
        <ExpenseSorting handleSorting={handleSorting} />
        <ExpenseFiltering filter={filter} handleFilter={handleFilter} />
      </div>
    </div>
  );
}
