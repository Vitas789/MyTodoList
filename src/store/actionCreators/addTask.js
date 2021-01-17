const addTask = (value) => {
  return {
    type: "ADD_TASK",
    value: value,
  };
};

export default addTask;
