import React,{ useState } from 'react';
import { Form, Input, Button } from 'antd';
import { signUp } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { UsergroupAddOutlined,FrownOutlined,EditOutlined } from '@ant-design/icons';
import './register.css';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 12,
    span: 12,
  },
};

const Register = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
    });

  const onFinish = (user) => {
    console.log('Success:', user);
    dispatch(signUp(user));
    setUser({ name: "", email: "", password: "" });
  };

  if (auth._id) return <Redirect to="/" />;

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container">

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
       <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input prefix={<UsergroupAddOutlined className="site-form-item-icon" />}/>
      </Form.Item>
      <Form.Item
        label="Username"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<FrownOutlined className="site-form-item-icon"/>}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password prefix={<EditOutlined className="site-form-item-icon"/>} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
export default Register;