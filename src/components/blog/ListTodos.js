import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Todo from "./Todo";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { getTodos } from "../../store/actions/todoActions";
// import { getPost } from "../../store/actions/blogActions";

const useStyles = makeStyles({
  todosStyle: {
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
});

const ListTodos = ({ todo, setTodo }) => {
  const auth= useSelector((state) => state.auth);
  const todos = useSelector((state) => state.todos);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [todo._id, dispatch]);

  console.log(todos)

  if (!auth._id) return <Redirect to="/login" />;

  return (
    <>
      <div className={classes.todosStyle}>
        <Typography variant="h2" style={{textAlign:"center"}}>
          {" "}
          {todos.length > 0 ? "Blog Posts" : "noTodosYet;"}{" "}
        </Typography>
        {todos &&
          todos.map((todo) => {
            return (
              <Todo
                todo={todo}
                key={todo._id}
                setTodo={setTodo}
                todos={todos}
              />
            );
          })}
      </div>
    </>
  );
};

export default ListTodos;
