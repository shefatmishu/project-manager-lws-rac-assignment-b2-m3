export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_TASK": {
      return { ...state, tasks: [...state.tasks, action.payload] };
    }

    case "UPDATE_TASK": {
      return {
        ...state,
        tasks: state.tasks.map((t) => {
          if (t.id === action.payload.id) {
            return action.payload;
          } else {
            return t;
          }
        }),
      };
    }
    case "SHOW_ADD_MODAL": {
      return { ...state, taskToUpdate: null, showAddModal: true };
    }
    case "EDIT_TASK": {
      return { ...state, taskToUpdate: action.payload, showAddModal: true };
    }
    case "DELETE_TO_TASK": {
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };
    }
    case "CLOSE_ADD_MODAL": {
      return { ...state, taskToUpdate: null, showAddModal: false };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
