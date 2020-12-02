import axios from "axios";
import { TodoBody } from "types/todos.type";

export const postTodo = async (data: TodoBody): Promise<void> => {
  try {
    await axios({
      method: "POST",
      url: "http://localhost:8080/api/todo",
      data, // = data : data
    });
  } catch (error) {
    throw new Error(error);
  }
};
