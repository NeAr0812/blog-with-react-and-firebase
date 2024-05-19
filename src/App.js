// 未使用のインポートを削除します
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import { useState } from 'react';


function App() {
  //ログインチェック
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreatePost" element={<CreatePost isAuth/>} />
          <Route path="/Login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/Logout" element={<Logout setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
