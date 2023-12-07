console.log("Hola mudi");

const initialState = [
  {
    id: 1,
    todo: "recolectar las piedras del infinito",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  //regresar un nuevo estado
  if (action.type === " [TODO] Add todo") {
    return [...state, action.payload];
  }

  return state;
};
let todos = todoReducer();
const newTodo = {
  id: 2,
  todo: "recolectar las reliquias de la muerte",
  done: false,
};
const addTodoAction = {
  type: " [TODO] Add todo",
  payload: newTodo,
};
console.log('Todos antes de agregar newTodo',todos);

todos = todoReducer(todos, addTodoAction);

console.log('Todos despues de agregar newTodo', { state: todos });
