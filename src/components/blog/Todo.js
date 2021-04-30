import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card  } from 'antd';

import { makeStyles } from "@material-ui/core/styles";
import { Typography, ButtonGroup, Button } from "@material-ui/core";
import { Create, Delete, CheckCircle } from "@material-ui/icons";
import moment from "moment";

import { deleteTodo, checkTodo } from "../../store/actions/todoActions";

const style = { background: '#BBD0F5', padding: '10px 0' };

const useStyles = makeStyles({
  todoStyle: {
    margin: "20px auto",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: "flex",
    justifyContent: "space-between",
  },
  moreStyle: {
    color: "#8f8f8f",
  },
  isComplete: {
    color: "green",
  },
  checked: {
    textDecoration: "line-through",
  },
});

const Todo = ({ todo, setTodo, todos }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleOnUpdateClick = (id) => {
    const foundTodo = todos.find((todo) => todo._id === id);
    console.log(foundTodo);
    setTodo({ ...foundTodo });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCheck = (id) => {
    dispatch(checkTodo(id));
  };

  return (
    <>
      <br />
      <div style={style}>
      <Row>
        <Col span={6} push={18}>
          <div style={style}>
          <Card title={todo.author}style={style}>
        <Typography variant="body2">
              Post date : {moment(todo.date).fromNow()}
            </Typography>
    </Card>
          </div>
        </Col>
        <Col span={18} pull={6}>
        <div style={style}>
        <Card title={todo.name} style={style}>
        <Typography variant="body2">
              Description blog post : {todo.description}
            </Typography>
    </Card>
    </div>
        </Col>
      </Row>
      </div>
    </>
  );
};

export default Todo;
