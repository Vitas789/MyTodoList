import React from "react";
import { Transition } from "react-transition-group";
import { connect } from "react-redux";
import {addTask} from "../store/actionCreators"

function Modal(props) {
  const [modalIsVisible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <section className="add-task">
      <div className="wrapper">
        <button
          className="modal__button modal__button_add-task"
          onClick={() => setVisible(true)}
        >
          <span className="modal__first"></span>
          <span className="modal__second"></span>
        </button>
      </div>
      <Transition in={modalIsVisible} timeout={500} mountOnEnter unmountOnExit>
        {(state) => (
          <div className={`modal ${state}`}>
            <form
              className="modal__form"
              onSubmit={(e) => {
                e.preventDefault();
                if (value) {
                  props.addTask(value);
                }
                setValue("");
              }}
            >
              <input
                className="modal__input"
                type="text"
                placeholder="Введите текст задачи"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              ></input>
              <button
                className="modal__button modal__button_add"
                type="button"
                onClick={() => {
                  if (value) {
                    props.addTask(value);
                    setValue("");
                  }
                }}
              >
                <img src="arrow.png" alt="add task" width="20px"></img>
              </button>
              <button
                className="modal__button modal__button_close"
                type="button"
                onClick={() => setVisible(false)}
              >
                <img src="cross.png" alt="close window" width="20px"></img>
              </button>
            </form>
          </div>
        )}
      </Transition>
    </section>
  );
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (id) => {
    dispatch(addTask(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
