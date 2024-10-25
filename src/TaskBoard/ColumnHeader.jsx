import SortingSvg from "../Svg-Components/SortingSvg";

export default function ColumnHeader({ title, count = 0 }) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <h3 className="text-lg font-semibold">
        {title}({count})
      </h3>
      <SortingSvg />
    </div>
  );
}
