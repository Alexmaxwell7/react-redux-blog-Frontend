import React, { useState } from 'react';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const handleClick = () => {
    //
}

const Header = () => {
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


        </Menu>
    )
}

export default Header;