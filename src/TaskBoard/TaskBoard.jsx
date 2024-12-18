import { useContext } from "react";
import { TaskDispatchContext } from "../context/TaskContext";
import AddTaskModal from "./AddTaskModal";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBoard({ search, showAddModal }) {
  const dispatch = useContext(TaskDispatchContext);
  function handleCloseClick() {
    dispatch({ type: "CLOSE_ADD_MODAL" });
  }

  return (
    <>
      <div className="mx-auto max-w-7xl p-6">
        {showAddModal && <AddTaskModal onCloseClick={handleCloseClick} />}
        <TaskAction onAddClick={() => dispatch({ type: "SHOW_ADD_MODAL" })} />
        <TaskList search={search} />
      </div>
    </>
  );
}
