import './App.css';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/register" element={<Register/>}></Route>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
