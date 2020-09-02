import React, { Component } from "react";
import * as api from "../utils/api";

class CommentAdder extends Component {
  state = {
    username: "",
    body: "",
    isLoading: true,
    isPosting: false,
  };

  componentDidMount() {
    this.setState({
      username: JSON.parse(localStorage.user).username,
    });
  }
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="userComments"
          id="userComments"
          placeholder="share your thoughts"
          onChange={this.handleChange}
        />
        <button type="submit">post comment</button>
      </form>
    );
  }
  handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();

    api.postComment(this.props.id, this.state.username, this.state.body);
  };
  handleChange = (changeEvent) => {
    this.setState({ body: changeEvent.target.value });
  };
}

export default CommentAdder;
