import { createContext, useReducer } from "react";
import { getAllTasks } from "../data/TaskList";
import { taskReducer } from "../reducers/taskReducer";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

const initialState = {
  tasks: getAllTasks(),
  taskToUpdate: null,
  showAddModal: false,
};

export default function TaskContextProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={state}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
