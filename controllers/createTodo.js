import { createTodo } from "../store/todoStore.js";
import parseBody from "../utils/parseBody.js";
import sendResponse from "../utils/sendResponse.js";

const createTodoController = async (req, res) => {
  try {
    const body = await parseBody(req);
    const { title, description } = body;

    // Validation
    if (!title || title.trim() === "") {
      return sendResponse(res, 400, { success: false, message: "title is required and must be a non-empty string" });
    }

    const newTodo = createTodo({ title: title.trim(), description });

    return sendResponse(res, 201, { success: true, message: "Todo created successfully", data: newTodo });
  } catch (err) {
    return sendResponse(res, 500, { success: false, message: err.message || "Internal Server Error" });
  }
};

export default createTodoController;


