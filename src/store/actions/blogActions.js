import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

export const getPost = () => {
  return (dispatch) => {
    axios
      .get(`${url}/post`, setHeaders())
      .then((todos) => {
        dispatch({
          type: "GET_POST",
          todos,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addPost = (newTodo) => {
  return (dispatch, getState) => {
    const author = getState().auth.name;
    const uid = getState().auth._id;
    axios
      .post(`${url}/post`, { ...newTodo, author, uid }, setHeaders())
      .then((todo) => {
        dispatch({
          type: "ADD_POST",
          todo,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
      newTodo=""
  };

};

export const updatePost = (updatedTodo, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/post/${id}`, updatedTodo, setHeaders())
      .then((todo) => {
        dispatch({
          type: "UPDATE_POST",
          todo,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/post/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_POST",
          id,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const checkPost = (id) => {
  return (dispatch) => {
    axios
      .patch(`${url}/post/${id}`, {}, setHeaders())
      .then((todo) => {
        dispatch({
          type: "CHECK_POST",
          todo,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
