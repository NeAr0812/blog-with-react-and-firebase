import React, { useEffect, useState } from 'react';
import "./CreatePost.css";
import {addDoc, collection} from "firebase/firestore"; //{}があるときは名前つきインポート
import {db} from "../firebase";
import { auth } from "../firebase"; // authをインポートする
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ isAuth }) => {
  //タイトル記入
  const [title, setTitle] = useState();
  //投稿内容記入
  const [postText, setPostText] = useState();
  const navigate = useNavigate();

  const createPost = async() => {
   await addDoc(collection(db, "posts"), {
    title: title,
    poststext: postText,
    author: {
      username: auth.currentUser.displayName, //ログインしているdisplayユーザーnameを取得している
      id: auth.currentUser.uid
    },
   });
   navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="createPostPage">
      <div className='postContainer'>
        <h1>記事を投稿する</h1>
        <div className='inputPost'>
          <div>タイトル</div>
          {/* setTitle(e.target.value)はイベントの中のvalue */}
          <input type="text" placeholder='タイトルを記入' onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='inputPost'>
          <div>投稿</div>
          <textarea type="text" placeholder='投稿内容を記入' onChange={(e) => setPostText(e.target.value)}/>
        </div>
        <button className='postButton' onClick={createPost}>投稿する</button>
      </div>
    </div>
  )
};

export default CreatePost
