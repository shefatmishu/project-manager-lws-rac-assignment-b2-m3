import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskColumn from "./TaskColumn";

export default function TaskList({ search }) {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="-mx-2 mb-6 flex flex-wrap">
      <TaskColumn
        title={"To Do"}
        type={"todo"}
        tasks={tasks.filter(
          (a) =>
            a.category === "todo" &&
            a.taskName.toLowerCase().includes(search.toLowerCase())
        )}
        //onEdit={onEdit}
      />
      <TaskColumn
        title={"On Progress"}
        type={"inprogress"}
        tasks={tasks.filter(
          (a) =>
            a.category === "inprogress" &&
            a.taskName.toLowerCase().includes(search.toLowerCase())
        )}
        //onEdit={onEdit}
      />
      <TaskColumn
        title={"Done"}
        type={"done"}
        tasks={tasks.filter(
          (a) =>
            a.category === "done" &&
            a.taskName.toLowerCase().includes(search.toLowerCase())
        )}
        //onEdit={onEdit}
      />
      <TaskColumn
        title={"Revised"}
        type={"revised"}
        tasks={tasks.filter(
          (a) =>
            a.category === "revised" &&
            a.taskName.toLowerCase().includes(search.toLowerCase())
        )}
        //onEdit={onEdit}
      />
    </div>
  );
}
