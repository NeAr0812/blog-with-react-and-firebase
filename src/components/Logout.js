import { signOut } from 'firebase/auth'; // 'signOut'をimportする
import React from 'react';
import { auth } from '../firebase'; // 'provider'を削除
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => { // 'Login'を'Logout'に変更
  const navigate = useNavigate();
  const logout = () => {
    //googleでログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  }
  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
};

export default Logout;