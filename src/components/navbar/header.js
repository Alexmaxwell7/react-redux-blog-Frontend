import React, { useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link, useHistory } from "react-router-dom";
import { AppBar, Typography, Toolbar, Button } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../../store/actions/authActions";

const { SubMenu } = Menu;

const handleClick = () => {
    //
}

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log(state);
    const user = useSelector((state) => state.auth);
  
    const handleSignOut = () => {
      dispatch(signOut());
      history.push("/login");
    };
    const [current, setCurrent] = useState("");
    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="mail" icon={<MailOutlined />}>
                <Link to="/login">
                    Login
                  </Link>
            </Menu.Item>
            <Menu.Item key="app">
                <Link to="/register">
                 Register
                </Link>
            </Menu.Item>
            <Menu.Item key="signout">
              <Button
                  edge="end"
                  color="inherit"
                  
                  onClick={() => handleSignOut()}
                >
                  <Link  to="/">
                    SignOut
                  </Link>
                </Button>
                </Menu.Item>


        </Menu>
    )
}

export default Header;