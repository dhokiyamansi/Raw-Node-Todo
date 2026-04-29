import { getTodoById, updateTodo } from "../store/todoStore.js";
import parseBody from "../utils/parseBody.js";
import sendResponse from "../utils/sendResponse.js";

const updateTodoByIdController = async (req, res, id) => {
  try {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      return sendResponse(res, 400, { success: false, message: "ID must be a number" });
    }

    const existing = getTodoById(numericId);
    if (!existing) {
      return sendResponse(res, 404, { success: false, message: `Todo with id ${numericId} not found` });
    }

    const body = await parseBody(req);
    const { title, description } = body;

    if (Object.keys(body).length === 0) {
      return sendResponse(res, 400, { success: false, message: "No fields provided to update" });
    }

    const updates = {};
    if (title !== undefined) updates.title = title.trim();
    if (description !== undefined) updates.description = description;

    const updatedTodo = updateTodo(numericId, updates);

    return sendResponse(res, 200, { success: true, message: "Todo updated", data: updatedTodo });

  } catch (err) {
    return sendResponse(res, 500, { success: false, message: "Internal Server Error" });
  }
};

export default updateTodoByIdController;