import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext, TaskDispatchContext } from "../context/TaskContext";

export default function AddTaskModal() {
  const { tasks, taskToUpdate } = useContext(TaskContext);
  const dispatch = useContext(TaskDispatchContext);
  const [task, setTask] = useState(
    taskToUpdate || {
      id: null,
      taskName: "",
      description: "",
      category: "todo",
      date: "",
    }
  );

  const handleChange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;

    setTask({
      ...task,
      [name]: value,
    });
  };

  // const onSave = (task) => {
  //   task.id = crypto.randomUUID();
  //   dispatch({
  //     type: "ADD_TO_TASK",
  //     payload: task,
  //   });
  // };
  const checkAllValid = () => {
    debugger;
    return (
      task.taskName.trim().length > 0 &&
      task.description.trim().length > 0 &&
      task.category.trim().length > 0
      //task.date.trim().l > 0
    );
  };

  const onSave = (e) => {
    debugger;
    if (checkAllValid()) {
      if (taskToUpdate) {
        dispatch({
          type: "UPDATE_TASK",
          payload: task,
        });
        toast.success(`${task.taskName} is updated succesfully`, {
          position: "top-right",
        });
      } else {
        task.id = crypto.randomUUID();
        dispatch({
          type: "ADD_TO_TASK",
          payload: task,
        });

        toast.success(`${task.taskName} is updated succesfully`, {
          position: "top-right",
        });

        setTask({ taskName: "", description: "", category: "", date: "" });
      }
      onClose();
    } else {
      toast.warning(`Some fields are missing*`, {
        position: "top-right",
      });
    }
  };

  const onClose = () => {
    dispatch({
      type: "CLOSE_ADD_MODAL",
    });
  };

  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0"></div>
      <body className="mx-auto my-10 w-full max-w-[500px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1 left-1/3">
        <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
          <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold text-green-400">
              {taskToUpdate ? "Edit Task" : "Add New Task"}
            </h2>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="taskName"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Task Name
                </label>
                <input
                  type="text"
                  id="taskName"
                  name="taskName"
                  value={task.taskName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  value={task.description}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={task.date}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={task.category}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="todo">To-Do</option>
                  <option value="inprogress">On Progress</option>
                  <option value="done">Done</option>
                  <option value="revised">Revised</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={(e) => {
                    e.preventDefault();
                    onSave(task);
                  }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </>
  );
}
