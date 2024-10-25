import TaskColumn from "./TaskColumn";

export default function TaskList({ tasks = [], onEdit, onDelete }) {
  return (
    <div className="-mx-2 mb-6 flex flex-wrap">
      <TaskColumn
        title={"To Do"}
        type={"todo"}
        tasks={tasks.filter((a) => a.category === "todo")}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <TaskColumn
        title={"On Progress"}
        type={"inprogress"}
        tasks={tasks.filter((a) => a.category === "inprogress")}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <TaskColumn
        title={"Done"}
        type={"done"}
        tasks={tasks.filter((a) => a.category === "done")}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      <TaskColumn
        title={"Revised"}
        type={"revised"}
        tasks={tasks.filter((a) => a.category === "revised")}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      {/* {tasks
        .filter((a) => a.category === "done")
        .map((task) => (
          <TaskColumn key={task.id} task={task} />
        ))} */}
    </div>
  );
}
