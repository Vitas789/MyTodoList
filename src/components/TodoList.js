import React from 'react'

function TodoList(props) {
  return(
  <label className="todo__label" htmlFor={props.id}> 
    <input className="todo__input" type="checkbox" id={props.id} onChange={() => props.onClick(props.id)} />                 
    <span className={"todo__task " + props.class}>{props.value}</span>
  </label>
  )
}

export default TodoList