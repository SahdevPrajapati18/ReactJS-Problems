const Read = (props) => {
    const todo = props.todo;
    const setTodo = props.setTodo;


    const renderTodos = todo.map((task)=> {
            return <li key={task.id}>{task.title}</li>
    });
  return (
    <div>
      <h1>Pending Todos</h1>
      <ol>{renderTodos}</ol>
    </div>
  )
}

export default Read
