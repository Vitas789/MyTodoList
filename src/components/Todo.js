import React, {useContext} from 'react'
import TodoList from './TodoList'
import Context from './Context'


function Todo(props) {
  const {tasks} = useContext(Context);
  console.log(tasks)
  const {toogleTodo} = useContext(Context);
  const taskAdd = tasks.map(task => {
    return <TodoList value={task.value} key={task.id} id={task.id} tasks={tasks} onClick ={toogleTodo} class={task.class}/>
  })
  
  return(
    <section className="todo">
      <div className="wrapper">
        <div className="todo__list">
          {taskAdd}
        </div>
        <div className="todo__add-task">
            <button className="todo__button">
              <span className="todo__first"></span>
              <span className="todo__second"></span>
            </button>
          </div>
      </div>
    </section>
  )
}

export default Todo