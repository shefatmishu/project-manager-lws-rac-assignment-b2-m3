export function taskReducer(state, action) {
  switch (action.type) {
    case "added": {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }
    case "edited": {
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        }),
      };
    }
    case "taskToUpdate": {
      return { ...state, taskToUpdate: action.payload };
    }
    case "deleted": {
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
