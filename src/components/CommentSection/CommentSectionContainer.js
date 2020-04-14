// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments] = useState(props.comments);
  console.log(comments);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      <div className="comment-section">
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>

      <div className="comment-form">
        <CommentInput />
      </div>
    </div>
  );
};

export default CommentSection;
