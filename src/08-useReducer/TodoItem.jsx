

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        style={{ fontSize: "small", width: "20rem" }}
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.todo}
      </span>
      <button style={{
          backgroundColor: "red",
          borderRadius: "5px",
          width: "1rem",
          fontSize: "small",
        }}
      className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        X
      </button>
    </li>
  );
};
