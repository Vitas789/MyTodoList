import React from 'react'

function Modal({ onCreate }) {
  const [className, setClass] = React.useState('modal');
  const [value, setValue] = React.useState('');

  function changeClass () {
    if (className === 'modal') {
    setClass('modal_active')
    } else {
      setClass('modal')
    }
  }

  function submitHandler(event) {
    if (value.trim()) {
      onCreate(value);
      setValue('');
    }
  }

  return(
    <section className="add-task">
        <button className="modal__button modal__button_add-task" onClick={() => changeClass()}>
          <span className="modal__first"></span>
          <span className="modal__second"></span>
        </button>
        <div className={className}>
          <form className="modal__form" name="forms">
            <input className="modal__input" type="text" placeholder="Введите текст задачи" value={value} onChange={event => setValue(event.target.value)}></input>
            <button className="modal__button modal__button_add" type="button" onClick={submitHandler}>
              <img src='arrow.png' alt='booba' width='20px'></img>
            </button>
            <button className="modal__button modal__button_close" type="button" onClick={() => setClass('modal')}>
            <img src='cross.png' alt='booba' width='20px'></img>
            </button>
          </form>
        </div>  
    </section>
  );
}

export default Modal;