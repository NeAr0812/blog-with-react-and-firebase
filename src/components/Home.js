import React, { useState, useEffect } from 'react'
import "./Home.css";
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Home = () => {
  const [postList, setpostList] = useState([]);
  useEffect (() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setpostList(data.docs.map((doc => ({ ...doc.data(), id: doc.id}))));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/"
  }

  if (!postList) return null;

  return (
    <div className="hogePage">
      {postList.map((post) => {
        return (
          <div className='postContents' key={post.id}>
            <div className='postHeader'>
              <h1>{post.title}</h1>
            </div>
            <div className='postTextContainer'>
              {post.postText}
            </div>
            <div className='nameAndDeleteButton'>
              {/* post.authorが存在する場合のみdisplayNameを表示 */}
              {post.author ? (
                <h3>{post.author.displayName}</h3>
              ) : (
                <h3>@{post.author.username}</h3>
              )}
              {post.author.id === auth.currentUser?.uid && (
                  <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;