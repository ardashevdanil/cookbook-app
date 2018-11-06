import axios from 'axios';
import React from 'react';
import './CommentInput.css';

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  postComment() {
    const { value } = { ...this.state };
    const { recipe, user } = { ...this.props };

    if (!value) return;

    axios.post('/comments', {
      recipeId: recipe,
      text: value,
      userName: user,
    });
    this.setState({ value: '' });
  }

  render() {
    const { value } = { ...this.state };

    return (
      <div className="CommentInput">
        <div className="CommentInput__heading">
          Post a Comment
        </div>
        <div className="CommentInput__input">
          <input
            onChange={this.handleChange}
            type="text"
            value={value}
          />
          <div
            className="CommentInput__button"
            onClick={this.postComment}
            role="button"
          >
            POST
          </div>
        </div>
      </div>
    );
  }
}

export default CommentInput;
