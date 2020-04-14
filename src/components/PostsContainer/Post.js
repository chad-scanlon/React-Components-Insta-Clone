// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes

  const [likes, setLikes] = useState(props.propsPassedFromParent.likes);
  const addLike = () => {
    setLikes(likes => likes + 1);
  };
  return (
    <div className="post-border">
      <PostHeader
        username={props.propsPassedFromParent.username}
        thumbnailUrl={props.propsPassedFromParent.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.propsPassedFromParent.imageUrl}
        />
      </div>
      <div className="like-section">
        <LikeSection addLike={addLike} likes={likes} />{" "}
      </div>
      <div className="comment-section">
        <CommentSection
          postId={props.propsPassedFromParent.imageUrl}
          comments={props.propsPassedFromParent.comments}
        />
      </div>
    </div>
  );
};

export default Post;
