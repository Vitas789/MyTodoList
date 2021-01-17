const editTask = (value, id) => {
  return {
    type: "EDIT_TASK",
    value: value,
    id: id,
  };
};

export default editTask;
