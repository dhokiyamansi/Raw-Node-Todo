import { getAllTodos } from "../store/todoStore.js";
import sendResponse from "../utils/sendResponse.js";

const getAllTodosController = (req, res) => {
    const todos = getAllTodos();
    if (todos.length === 0) {
        return sendResponse(res, 200,{success: true,message: "No todos found",data: []});
    }
    return sendResponse(res, 200,{success: true,message: "Todos fetched",data: todos});
};

export default getAllTodosController;

