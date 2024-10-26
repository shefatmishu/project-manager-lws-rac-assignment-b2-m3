import { createContext, useReducer } from "react";
import { getAllTasks } from "../data/TaskList";
import { taskReducer } from "../reducers/taskReducer";

export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);

const initialState = {
  tasks: getAllTasks(),
};

export default function TaskContextProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <TaskContext.Provider value={state.tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
