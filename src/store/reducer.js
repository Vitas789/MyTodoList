function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: state.length + 1,
          completed: false,
          class: "unchecked",
          value: action.value,
        },
      ];

    case "EDIT_TASK":
      const todoIndex = state.findIndex(({ id }) => id === action.id);
      state[todoIndex].value = action.value;
      return [...state];

    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.id);

    case "TOGGLE_TODO":
      const stateIndex = state.findIndex(({ id }) => id === action.id);
      state[stateIndex].completed = !state[stateIndex].completed;
      state[stateIndex].class =
        state[stateIndex].completed === true ? "checked" : "unchecked";
      return [...state];

    default:
      return state;
  }
}

export default reducer;