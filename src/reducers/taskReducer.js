export function taskReducer(state, action) {
  debugger;
  switch (action.type) {
    case "added": {
      debugger;
      let b = [...state.tasks, action.payload];
      return { ...state, tasks: b };
      //return [];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
