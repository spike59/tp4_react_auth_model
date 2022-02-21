import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from './screens/home';
import { Layout } from './ui/layout';
import { Register } from './screens/register';
import { Account } from './screens/account';
import { Login } from './screens/login';
import { Logout } from './screens/logout';
import { User } from './screens/user';
import { Admin } from './screens/admin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/register" index element={<Register />}></Route>
          <Route path="/account/validation" index element={<Account />}></Route>
          <Route path="/account/renew" index element={<Account />}></Route>
          <Route path="/login" index element={<Login />}></Route>
          <Route path="/logout" index element={<Logout />}></Route>
          <Route path="/user" index element={<User />}></Route>
          <Route path="/admin" index element={<Admin />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
