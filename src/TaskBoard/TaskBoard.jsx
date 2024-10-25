import { useState } from "react";
import { getAllTasks } from "../data/TaskList.js";
import AddTaskModal from "./AddTaskModal";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TaskBoard({ search }) {
  const [tasks, setTasks] = useState(getAllTasks());
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  console.log(tasks);

  function handleAddEditTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setShowAddModal(false);
  }

  function handleEditTask(task) {
    debugger;
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleDeleteTask(taskId) {
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksAfterDelete);
  }

  function handleCloseClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }

  return (
    <>
      <div className="mx-auto max-w-7xl p-6">
        {showAddModal && (
          <AddTaskModal
            onSave={handleAddEditTask}
            onCloseClick={handleCloseClick}
            taskToUpdate={taskToUpdate}
          />
        )}
        <TaskAction onAddClick={() => setShowAddModal(true)} />
        <TaskList
          tasks={tasks.filter((a) =>
            a.taskName.toLowerCase().includes(search.toLowerCase())
          )}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
      </div>
    </>
  );
}
