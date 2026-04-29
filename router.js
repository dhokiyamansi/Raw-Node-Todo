import createTodoController from "./controllers/createTodo.js";
import getAllTodosController from "./controllers/getAllTodos.js";
import getTodoByIdController from "./controllers/getTodoById.js";
import updateTodoByIdController from "./controllers/updateTodo.js";
import deleteTodoByIdController from "./controllers/deleteTodo.js";
import sendResponse from "./utils/sendResponse.js";


const router = (req, res) => {
  
  const method = req.method;
  const url = req.url;

  const parts = url.split("/");       // http://localhost:3000/todos/11 : ["", "todos", "11"]
  const basePath = parts[1];          // "todos"
  const id = parts[2];                // "11"

  /* syntax difference  
  // const { method, url } = req;
  // const [, basePath, id] = url.split("/");  ["", "todos", "11"]    
  */

  // POST /todos → Create
  if (method === "POST" && basePath === "todos" && !id) {
    return createTodoController(req, res);
  }

  // GET /todos → Get All
  if (method === "GET" && basePath === "todos" && !id) {
    return getAllTodosController(req, res);
  }

  // GET /todos/:id → Get by ID
  if (method === "GET" && basePath === "todos" && id) {
    return getTodoByIdController(req, res, id);
  }

  // PUT /todos/:id → update by ID
  if (method === "PUT" && basePath === "todos" && id) {
    return updateTodoByIdController(req, res, id);
  }

  // DELETE /todos/:id → delete by ID 
  if (method === "DELETE" && basePath === "todos" && id) {
    return deleteTodoByIdController(req, res, id);
  }

  return sendResponse(res, 404, { success: false, message: "Route not found" });


};

export default router;






