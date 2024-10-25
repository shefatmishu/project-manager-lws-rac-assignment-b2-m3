import TaskColumn from "./TaskColumn";

export default function TaskList({ tasks = [], onEdit, onDelete }) {
  return (
    <div className="-mx-2 mb-6 flex flex-wrap">
      <TaskColumn
        title={"To Do"}
        tasks={tasks.filter((a) => a.category === "todo")}
      />
      <TaskColumn
        title={"On Progress"}
        tasks={tasks.filter((a) => a.category === "inprogress")}
      />
      <TaskColumn
        title={"Done"}
        tasks={tasks.filter((a) => a.category === "done")}
      />
      <TaskColumn
        title={"Revised"}
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
