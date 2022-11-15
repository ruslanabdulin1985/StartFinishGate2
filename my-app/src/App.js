import './App.css';
import Main from './views/Main'
import Home from './views/Home'
import Scores from './views/Scores'
import Menu from './components/Menu';
import Logo from './components/Logo';

import {
  Routes,
  Route,
  Outlet
} from "react-router-dom";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<>
          <Logo></Logo>
          <Menu></Menu>
          <Outlet />
        </>}>
          <Route index element={<Home />} />
          <Route path="race" element={<Main></Main>} />
          <Route path="scores" element={<Scores></Scores>} />
          <Route path="*" element={<>NoPAge</>} />
        </Route>

      </Routes>
    </>

  );
}

export default App;
