import DeleteSvg from "./ui-SVG-component/DeleteSvg";
import EditSvg from "./ui-SVG-component/EditSvg";

export default function ExpenseRow() {
  return (
    <>
      <div className="flex justify-between items-center py-2 relative group cursor-pointer">
        <div>
          <h3 className="text-base font-medium leading-7 text-gray-600">
            Education
          </h3>
          <p className="text-xs text-gray-600">15 January 2024</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
            BDT 10000
          </p>

          <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
            <button
              className="hover:text-teal-600"
              role="button"
              title="Edit Button"
            >
              <EditSvg />
            </button>

            <button className="hover:text-red-600" role="button" title="Delete">
              <DeleteSvg />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center py-2 relative group cursor-pointer">
        <div>
          <h3 className="text-base font-medium leading-7 text-gray-600">
            Health
          </h3>
          <p className="text-xs text-gray-600">15 January 2024</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
            BDT 10000
          </p>

          <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
            <button
              className="hover:text-teal-600"
              role="button"
              title="Edit Button"
            >
              <EditSvg />
            </button>

            <button className="hover:text-red-600" role="button" title="Delete">
              <DeleteSvg />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}