import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskColumn from "./TaskColumn";

export default function TaskList() {
  const tasks = useContext(TaskContext);

  return (
    <div className="-mx-2 mb-6 flex flex-wrap">
      <TaskColumn
        title={"To Do"}
        type={"todo"}
        tasks={tasks.filter((a) => a.category === "todo")}
      />
      <TaskColumn
        title={"On Progress"}
        type={"inprogress"}
        tasks={tasks.filter((a) => a.category === "inprogress")}
      />
      <TaskColumn
        title={"Done"}
        type={"done"}
        tasks={tasks.filter((a) => a.category === "done")}
      />
      <TaskColumn
        title={"Revised"}
        type={"revised"}
        tasks={tasks.filter((a) => a.category === "revised")}
      />
      {/* {tasks
        .filter((a) => a.category === "done")
        .map((task) => (
          <TaskColumn key={task.id} task={task} />
        ))} */}
    </div>
  );
}
