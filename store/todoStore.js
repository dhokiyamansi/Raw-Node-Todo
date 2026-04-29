const todos = [];
let idCounter = 1;


// CREATE
const createTodo = ({ title, description }) => {
  const newTodo = {
    id: idCounter++,              
    title,
    description,
    createdAt: new Date().toISOString(),
  };
  todos.push(newTodo);
  // console.log("Todo created:", newTodo);
  return newTodo;
};


// GET ALL   
const getAllTodos = () => {
  const allTodos = [...todos];           // spreading of array object (tasks)
  // console.log("Fetched all todos:", allTodos);
  return allTodos;
}         


// GET BY ID 
const getTodoById = (id) => {
  const todo = todos.find((todo) => todo.id === id) || null;
  // console.log("Fetched todo by ID:", todo);
  return todo;
};


// UPDATE BY ID
const updateTodo = (id, updates) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) return null;
  todos[index] = { ...todos[index], ...updates };   
  // console.log(`Todo updated with id ${id}:`, todos[index]);
  return todos[index];
};


// DELETE BY ID
const deleteTodo = (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) return false;
  todos.splice(index, 1);
  // console.log(`Todo deleted with id ${id}`);
  return true;
};


export { createTodo, getAllTodos, getTodoById, updateTodo, deleteTodo };




