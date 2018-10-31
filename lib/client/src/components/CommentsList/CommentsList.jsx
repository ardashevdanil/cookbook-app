import React from 'react';
import Comment from '../Comment/Comment';
import './CommentsList.css';

function CommentsList() {
  return (
    <div className="CommentsList">
      <div className="CommentsList__heading">
        Comments
      </div>
      <div className="CommentsList__list">
        <Comment />
        <Comment />
      </div>
    </div>
  );
}

export default CommentsList;
