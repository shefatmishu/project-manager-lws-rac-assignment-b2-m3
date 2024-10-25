import AddButtonSvg from "../Svg-Components/AddButtonSvg";

export default function TaskAction({ onAddClick }) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-2xl font-bold">Projectify</h2>
      <div className="flex space-x-2">
        <button
          className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
          onClick={onAddClick}
        >
          <AddButtonSvg />
          Add
        </button>
      </div>
    </div>
  );
}
