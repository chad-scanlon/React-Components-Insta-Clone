//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data";
// console.log(dummyData);

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map((p, index) => (
        <Post key={index} propsPassedFromParent={p} />
      ))}
    </div>
  );
};

export default PostsPage;
