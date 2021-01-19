import React from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";

function Todo(props) {
  const taskAdd = props.state.map((task) => {
    return (
      <TodoList
        value={task.value}
        key={task.id}
        id={task.id}
        tasks={props.state}
        completed={task.completed}
      />
    );
  });

  return (
    <section className="todo">
      <div className="wrapper">
        <div className="todo__list">{taskAdd}</div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(Todo);
