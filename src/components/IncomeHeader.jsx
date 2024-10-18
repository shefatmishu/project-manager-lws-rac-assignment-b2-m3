import IncomeFiltering from "./IncomeFiltering";
import IncomeSorting from "./IncomeShorting";
import IconSvg from "./ui-SVG-component/IconSvg";

export default function IncomeHeader() {
  return (
    <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base">
          <IconSvg />
        </div>

        <div>
          <h3 className="text-xl font-semibold leading-7 text-gray-800">
            Income
          </h3>
        </div>
      </div>
      <div>
        <IncomeSorting />
        <IncomeFiltering />
      </div>
    </div>
  );
}
