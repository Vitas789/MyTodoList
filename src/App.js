import React from 'react'
import Header from './components/Header'
import Todo from './components/Todo'
import Modal from './components/Modal'
import Context from './components/Context'

function App() {
  const [tasks, setTasks] = React.useState([
    {id:1, completed: false, class: 'unchecked', value: 'Проснуться'},
    {id:2, completed: false, class: 'unchecked', value: 'Побриться'},
    {id:3, completed: false, class: 'unchecked', value: 'Купить молоко'},
    {id:4, completed: false, class: 'unchecked', value: 'Навестить друга'},
    {id:5, completed: false, class: 'unchecked', value: 'Купить сыр'},
  ]);

  function toogleTodo(id) {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
          task.class = task.completed === true ? 'checked' : 'unchecked'
        }
        return task
      })
    )
  }

  // function removeTask(id) {
  //   setTasks(tasks.filter(task => task.id !== id))
  // }

  return (
  <Context.Provider value={{tasks, toogleTodo}}>
    <div>
      <Header />
      <Todo />
      <Modal />
    </div>
  </Context.Provider>
  )
}

export default App;
