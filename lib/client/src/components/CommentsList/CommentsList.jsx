import PropTypes from 'prop-types';
import React from 'react';
import './CommentsList.css';

import Comment from '../Comment/Comment';
import CommentInput from '../CommentInput/CommentInput';

class CommentsList extends React.Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
    const {
      comments,
      fetchComments,
      recipe,
      user,
    } = { ...this.props };
    const commentsComponents = comments.map(comment => (
      <Comment
        avatar={comment.avatar}
        date={comment.date}
        likes={comment.likes}
        key={comment.id}
        text={comment.text}
        userName={comment.userName}
      />
    ));

    if (!comments.length) {
      return (
        <CommentInput
          fetchComments={fetchComments}
          recipe={recipe}
          user={user}
        />
      );
    }

    return (
      <div>
        <div className="CommentsList">
          <div className="CommentsList__heading">
            Comments
          </div>
          <div className="CommentsList__list">
            {commentsComponents}
          </div>
        </div>
        <CommentInput
          fetchComments={fetchComments}
          recipe={recipe}
          user={user}
        />
      </div>
    );
  }
}

export default CommentsList;

CommentsList.defaultProps = {
  comments: [],
};

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  fetchComments: PropTypes.func.isRequired,
  recipe: PropTypes.number.isRequired,
  user: PropTypes.string.isRequired,
};
