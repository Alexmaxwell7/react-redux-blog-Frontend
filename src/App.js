import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Register from './components/auth/register'
import Login from './components/auth/login'
import Home from './components/blog/home';
import Header from './components/navbar/header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
    </Switch>
    </BrowserRouter>
</div>
  );
}

export default App;
