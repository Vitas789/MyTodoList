import React from "react";
import { Transition } from "react-transition-group";
import { connect } from "react-redux";
import {editTask} from "../store/actionCreators";
import {toggleTodo} from "../store/actionCreators";
import {removeTask} from "../store/actionCreators";

function TodoList(props) {
  const [formIsVisible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <label className="todo__label" htmlFor={props.id} key={props.id}>
      <input
        className="todo__checkbox"
        type="checkbox"
        id={props.id}
        onChange={() => {
          console.log(props.id)
          props.toggleTodo(props.id)
          }}
      />
      <span className={"todo__task " + props.class}>{props.value}</span>
      <button
        className="todo__button todo__button_delete"
        onClick={() => props.removeTask(props.id)}
      >
        <img src="delete.png" alt="delete task" width="20px"></img>
      </button>
      <button
        className="todo__button todo__button_edit"
        type="button"
        onClick={() => setVisible(true)}
      >
        <img src="change.png" alt="change task" width="20px"></img>
      </button>
      <Transition in={formIsVisible} timeout={500} mountOnEnter unmountOnExit>
        {(state) => (
          <div className={`todo__modal ${state}`}>
            <form
              className="todo__form"
              onSubmit={(e) => {
                e.preventDefault();
                props.editTask(value, props.id);
                setVisible(false);
              }}
            >
              <input
                className="todo__input"
                type="text"
                placeholder={props.value}
                onChange={(event) => setValue(event.target.value)}
              ></input>
              <div className="todo__buttons">
                <button
                  className="todo__button todo__button_change"
                  type="button"
                  onClick={() => {
                    props.editTask(value, props.id);
                    setVisible(false);
                  }}
                >
                  Изменить
                </button>
                <button
                  className="todo__button todo__button_close"
                  type="button"
                  onClick={() => setVisible(false)}
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        )}
      </Transition>
    </label>
  );
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => {
    dispatch(toggleTodo(id));
  },
  editTask: (value, id) => {
    dispatch(editTask(value, id));
  },
  removeTask: (id) => {
    dispatch(removeTask(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
