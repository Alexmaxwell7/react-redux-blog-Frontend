import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Register from './components/auth/register'
import Login from './components/auth/login'
import Headers from './components/navbar/header';
import Todos from './components/blog/Todos';
import { useDispatch } from "react-redux";
import { loadUser } from "./store/actions/authActions";
import React, { useEffect } from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
   <Layout >
    <Router>
     <Headers />
    <Switch>
    <Route  path="/login" component={Login} />
    <Route  path="/register" component={Register} />
    <Route exact path="/" component={Todos} />
    </Switch>
    <br />
    <br />
    <br />
    <Footer style={{textAlign:"center",color:"black",fontSize:"30px"}}>Copy Rights @ Maxwell Blog</Footer>
    </Router>
   
    </Layout>
  );
}

export default App;
