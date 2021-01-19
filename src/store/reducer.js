function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: state.length + 1,
          completed: false,
          class: "unchecked",
          value: action.payload,
        },
      ];

    case "EDIT_TASK":
      const todoIndex = state.findIndex(({ id }) => id === action.payload.id);
      state[todoIndex].value = action.payload.value;
      return [...state];

    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);

    case "TOGGLE_TODO":
      const stateIndex = state.findIndex(({ id }) => id === action.payload);
      state[stateIndex].completed = !state[stateIndex].completed;
      return [...state];

    default:
      return state;
  }
}

export default reducer;
