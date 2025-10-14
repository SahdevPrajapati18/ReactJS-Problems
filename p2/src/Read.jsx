const Read = (props) => {
  const { todo, setTodo } = props;

  const deleteHandler = (id) => {
    const filtertodos = todo.filter((task) => task.id !== id);
    setTodo(filtertodos);
  };

  const renderTodos = todo.map((task) => (
    <li
      className="flex items-center justify-between p-4 mt-3 bg-white rounded-lg shadow"
      key={task.id}
    >
      <span className="text-gray-800">{task.title}</span>
      <button
        className="px-3 py-1 text-sm font-semibold text-red-700 bg-red-100 rounded-lg hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        onClick={() => deleteHandler(task.id)}
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div className="p-5 mx-auto w-80 bg-gray-100 rounded-lg shadow-md overflow-auto max-h-100">
      <h1 className="p-5 mb-5 text-2xl font-bold text-center text-white bg-indigo-600 rounded-lg">
        Pending Todos
      </h1>
      <ol className="list-decimal list-inside space-y-3">{renderTodos}</ol>
    </div>
  );
};

export default Read;
