import './App.css';
import Main from './views/Main'
import Scores from './views/Scores'
import Menu from './components/Menu';
import Logo from './components/Logo';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Logo></Logo>
      <Menu></Menu>
      <Routes>
        <Route path="/race" component={Main}>
        </Route>
        <Route path="/scores" component={Scores}>
        </Route>
      </Routes>

    </Router>

  );
}

export default App;
