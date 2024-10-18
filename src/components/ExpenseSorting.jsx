import { useState } from "react";
import SortingSvg from "./ui-SVG-component/SortingSvg";

export default function ExpenseSorting({ handleSorting }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button2"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <SortingSvg />
        </button>
      </div>

      {open && (
        <div
          className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu2"
          aria-orientation="vertical"
          aria-labelledby="menu-button2"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
              onClick={() => {
                setOpen(false);
                handleSorting(true);
              }}
            >
              Low to High
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
              onClick={() => {
                setOpen(false);
                handleSorting(false);
              }}
            >
              High to Low
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
