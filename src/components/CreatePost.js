import React, { useState } from 'react';
import "./CreatePost.css";
const CreatePost = () => {
  //タイトル記入
  const [title, setTitle] = useState();
  //投稿内容記入
  const [postText, setPostText] = useState();

  const createPost = () => {
    console.log(title);
    console.log(postText);
  }
  return (
    <div class="createPostPage">
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
