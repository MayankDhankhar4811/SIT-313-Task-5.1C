import React from 'react';
import './Information.css'; 

const Info = () => {
  return (
    <div className="Section">
      
      <h2>What do you want to ask or share</h2>

      <p>
        This section is designed based on the type of the post. It could be developed by conditional rendering. 
        <a className='color'> For posting an article, the following section would be displayed.</a>
      </p>

      <label className='A1'>Title</label>
      <input className= 'AF1'type="text" placeholder="Start your question with how, what, why, etc." />

      <h3 className='abstractclass'> Abstract</h3>
      <textarea placeholder='Enter a 1- paragraph Abstract'/>

      <h3 className='abstractclass'>Article Text:</h3>
      <textarea placeholder="Describe your problem..." />

      <label>Tags</label>
      <input className= 'AF2' type="text" placeholder="please add up to three tags to describe what your question is about, e.g., Java" />

      <button className="post">Post</button>
    </div>
  );
};

export default Info;

