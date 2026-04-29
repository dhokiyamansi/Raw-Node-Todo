import { getTodoById, deleteTodo } from "../store/todoStore.js";
import sendResponse from "../utils/sendResponse.js";

const deleteTodoByIdController = (req, res, id) => {
  const numericId = Number(id);
  if (isNaN(numericId)) {
    return sendResponse(res, 400, { success: false, message: "ID must be a number" });
  }
  const existing = getTodoById(numericId);
  if (!existing) {
    return sendResponse(res, 404, { success: false, message: `Todo with id ${numericId} not found` });
  }
  deleteTodo(numericId);
  return sendResponse(res, 200, { success: true, message: `Todo with id ${numericId} deleted` });
};

export default deleteTodoByIdController;