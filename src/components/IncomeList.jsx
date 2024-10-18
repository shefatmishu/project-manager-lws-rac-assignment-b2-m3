import IncomeHeader from "./IncomeHeader";
import IncomeRow from "./IncomeRow";

export default function IncomeList() {
  return (
    <div className="border rounded-md relative">
      <IncomeHeader />

      <div className="p-4 divide-y">
        <IncomeRow />
      </div>
    </div>
  );
}
