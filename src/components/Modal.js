import React from "react";
import { Transition } from "react-transition-group";

function Modal({ onCreate }) {
  const [modalIsVisible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState("");

  function submitHandler(event) {
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

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
            <form className="modal__form">
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
                onClick={submitHandler}
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

export default Modal;
