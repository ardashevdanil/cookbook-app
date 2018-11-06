import PropTypes from 'prop-types';
import React from 'react';
import Comment from '../Comment/Comment';
import './CommentsList.css';

class CommentsList extends React.Component {
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { comments } = { ...this.props };
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

    return (
      <div className="CommentsList">
        <div className="CommentsList__heading">
          Comments
        </div>
        <div className="CommentsList__list">
          {commentsComponents}
        </div>
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
};
