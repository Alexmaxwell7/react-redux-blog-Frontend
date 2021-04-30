import { toast } from "react-toastify";

const blogReducer = (todos = [], action) => {
  switch (action.type) {
    case "GET_POST":
      return action.todos.data;
    case "ADD_POST":
      toast.success("A Post was added...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return [action.todo.data, ...todos];
    case "UPDATE_POST":
      toast.success("A Post was updated...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return todos.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );
    case "CHECK_POST":
      toast.success("A post status was changed...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return todos.map((todo) =>
        todo._id === action.todo.data._id ? action.todo.data : todo
      );
    case "DELETE_POST":
      toast.success("A post was deleted...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return todos.filter((todo) => todo._id !== action.id);
    case "CLEAR_POST":
      return [];
    default:
      return todos;
  }
};

export default blogReducer;
