import { useContext, useState } from "react";
import { TaskDispatchContext } from "../context/TaskContext";
import DeleteSvg from "../Svg-Components/DeleteSvg";
import EditSvg from "../Svg-Components/EditSvg";
import ColumnHeader from "./ColumnHeader";
import NoTasksFound from "./NoTaskFound";

export default function TaskColumn({ title, type, tasks = [] }) {
  const dispatch = useContext(TaskDispatchContext);
  const [isAscending, setIsAscending] = useState(false);

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

  console.log({ tas: tasks });

  return (
    <>
      <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
        <div className={`rounded-lg ${getBgColor()} p-4`}>
          <ColumnHeader
            title={title}
            count={tasks.length}
            handleFilter={() => {
              isAscending ? setIsAscending(false) : setIsAscending(true);
            }}
          />
          {tasks
            .sort((a, b) =>
              isAscending
                ? new Date(a.date) - new Date(b.date)
                : new Date(b.date) - new Date(a.date)
            )
            .map((task) => (
              <>
                <div>
                  <div className="mb-4 rounded-lg bg-gray-800 p-4">
                    <div className="flex justify-between">
                      <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
                        {task.taskName}
                      </h4>
                      <div className="flex gap-2">
                        <div
                          onClick={() =>
                            dispatch({ type: "EDIT_TASK", payload: task })
                          }
                        >
                          <EditSvg />
                        </div>
                        <div
                          onClick={() =>
                            dispatch({
                              type: "DELETE_TO_TASK",
                              payload: task.id,
                            })
                          }
                        >
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
          {tasks.length === 0 && <NoTasksFound />}
        </div>
      </div>
    </>
  );
}
