import { getTodoById } from "../store/todoStore.js";
import sendResponse from "../utils/sendResponse.js";


const getTodoByIdController = (req, res, id) => {
    const numericId = Number(id);
    if (isNaN(numericId)) {
        return sendResponse(res, 400, { success: false, message: "ID must be a number" });
    }
    const todo = getTodoById(numericId);
    if (!todo) {
        return sendResponse(res, 404, { success: false, message: `Todo with id ${numericId} not found` });
    }
    return sendResponse(res, 200, { success: true, message: "Todo fetched", data: todo });
};

export default getTodoByIdController;