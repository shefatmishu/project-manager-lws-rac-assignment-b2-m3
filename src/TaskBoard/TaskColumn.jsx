import DeleteSvg from "../Svg-Components/DeleteSvg";
import EditSvg from "../Svg-Components/EditSvg";
import ColumnHeader from "./ColumnHeader";

export default function TaskColumn({ title, type, tasks = [] }) {
  const getBgColor = () => {
    if (type === "todo") {
      return "bg-indigo-600";
    } else if (type === "inprogress") {
      return "bg-yellow-500";
    } else if (type === "done") {
      return "bg-teal-500";
    } else if (type === "revised") {
      return "bg-rose-500";
    } else {
      return "";
    }
  };

  return (
    <>
      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className={`rounded-lg ${getBgColor()} p-4`}>
          <ColumnHeader title={title} count={tasks.length} />
          {tasks.map((task) => (
            <>
              <div>
                <div className="mb-4 rounded-lg bg-gray-800 p-4">
                  <div className="flex justify-between">
                    <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
                      {task.taskName}
                    </h4>
                    <div className="flex gap-2">
                      <div
                        onClick={(e) => {
                          //onEdit(task);
                        }}
                      >
                        <EditSvg />
                      </div>
                      <div onClick={() => onDelete(task.id)}>
                        <DeleteSvg />
                      </div>
                    </div>
                  </div>
                  <p className="mb-2 text-sm text-zinc-200">
                    {task.description}
                  </p>

                  <p className="mt-6 text-xs text-zinc-400">{task.date}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
