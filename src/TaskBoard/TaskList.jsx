import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskColumn from "./TaskColumn";

export default function TaskList() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="-mx-2 mb-6 flex flex-wrap">
      <TaskColumn
        title={"To Do"}
        type={"todo"}
        tasks={tasks.filter((a) => a.category === "todo")}
        //onEdit={onEdit}
      />
      <TaskColumn
        title={"On Progress"}
        type={"inprogress"}
        tasks={tasks.filter((a) => a.category === "inprogress")}
        //onEdit={onEdit}
      />
      <TaskColumn
        title={"Done"}
        type={"done"}
        tasks={tasks.filter((a) => a.category === "done")}
        //onEdit={onEdit}
      />
      <TaskColumn
        title={"Revised"}
        type={"revised"}
        tasks={tasks.filter((a) => a.category === "revised")}
        //onEdit={onEdit}
      />
    </div>
  );
}
