import React,{ useState } from 'react';
import { Form, Input, Button } from 'antd';
import { signIn } from "../../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
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

const Login = () => {

    const auth= useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [creds, setCreds] = useState({
      email: "",
      password: "",
    });
  const onFinish = (creds) => {
    console.log('Success:', creds);
    dispatch(signIn(creds.email, creds.password));
    setCreds({ email: "", password: "" });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (auth._id) return <Redirect to ='/'/>

  return (
    <div>

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
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      
      <Form.Item
        label="Username"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
       <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
export default Login;