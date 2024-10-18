import { useState } from "react";
import FilteringSvg from "./ui-SVG-component/FilteringSvg";

export default function IncomeFiltering({ filter, handleFilter }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="filter-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <FilteringSvg />
        </button>
      </div>
      {open && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button"
          tabIndex="-1"
          id="filter-dropdown"
        >
          <div className="py-1" role="none">
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id="filter-option-1"
                checked={filter === "Salary"}
                onClick={() => {
                  handleFilter(filter === "Salary" ? "" : "Salary");
                  setOpen(false);
                }}
              />
              <span className="ml-2">Salary</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id="filter-option-2"
                onClick={() => {
                  handleFilter(filter === "Outsourcing" ? "" : "Outsourcing");
                  setOpen(false);
                }}
              />
              <span className="ml-2">Outsourcing</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id="filter-option-3"
                onClick={() => {
                  handleFilter(filter === "Bond" ? "" : "Bond");
                  setOpen(false);
                }}
              />
              <span className="ml-2">Bond</span>
            </label>

            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                id="filter-option-3"
                onClick={() => {
                  handleFilter(filter === "Dividend" ? "" : "Dividend");
                  setOpen(false);
                }}
              />
              <span className="ml-2">Dividend</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
