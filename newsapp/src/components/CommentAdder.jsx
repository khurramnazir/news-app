import React, { Component } from "react";

class CommentAdder extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          name="userComments"
          id="userComments"
          placeholder="share your thoughts"
        />
        <button onSubmit={this.handleSubmit} type="submit">
          post comment
        </button>
      </form>
    );
  }
  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    console.log(submitEvent);
  };
}

export default CommentAdder;
