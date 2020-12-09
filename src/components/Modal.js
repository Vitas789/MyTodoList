import React, {useState} from 'react'

function Modal() {
  const [className, setClass] = React.useState('modal');
  console.log(className);

  function changeClass () {
    if (className === 'modal') {
    setClass('modal_active')
    } else {
      setClass('modal')
    }
  }

  return(
    <section className="add-task">
      <div className="wrapper">
        <button className="modal__button" onClick={() => changeClass()}>
          <span className="modal__first"></span>
          <span className="modal__second"></span>
        </button>
        <div className={className}>
          <form>
            <input></input>
          </form>
        </div> 
      </div>   
    </section>
  );
}

export default Modal;