const removeTask = (id) => {
  return {
    type: "REMOVE_TASK",
    id: id,
  };
};

export default removeTask;
