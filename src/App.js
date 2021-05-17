import './App.css';
import {
  Route
} from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Route exact component={Login} path={"/"} />
      <Route exact component={Dashboard} path={"/dashboard"} />
      <Route exact component={About} path={"/about"} />
    </div>
  );
}

export default App;
