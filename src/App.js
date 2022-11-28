import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Shop' exact element={<Shop />} />
          <Route path ='/Login' exact element={<Login />} />
          <Route path='/Signup' exact element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
