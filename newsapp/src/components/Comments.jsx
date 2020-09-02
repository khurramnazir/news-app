import * as api from "../utils/api";
import React, { Component } from "react";
import Voter from "./Voter";
import Loader from "./Loader";
import userContext from "./userContext";
import ToggleView from "./ToggleView";
import SingleArticle from "./SingleArticle";
import CommentAdder from "./CommentAdder";

class Comments extends Component {
  state = {
    article: [],
    isLoading: true,
    sort_by: "created_at",
    order: "desc",
    comments: [],
  };

  static contextType = userContext;
  componentDidMount() {
    api
      .getComments(this.props.id, this.props.sort_by, this.props.order)
      .then((comments) => {
        this.setState({ comments, isLoading: false });
      });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.sort_by !== this.state.sort_by ||
  //     prevState.order !== this.state.order
  //   ) {
  //     this.setState({
  //       sort_by: this.state.sort_by,
  //       order: this.state.order,
  //       comments: this.state.comments,
  //       // isLoading: false,
  //     });
  //   }
  // }
  render() {
    console.log(this.context);
    const { comments, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <section>
        {JSON.parse(localStorage.getItem("user")).username !== "guest" ? (
          <CommentAdder />
        ) : (
          <h2>Log in to comment</h2>
        )}

        <nav className="filter">
          <label htmlFor="votes">
            Sort Comments By
            <button onClick={this.handleClick} name="votes">
              Votes
            </button>
            <button onClick={this.handleClick} name="author">
              Author
            </button>
            <button onClick={this.handleClick} name="created_at">
              Date
            </button>
          </label>
        </nav>
        <ul className="commentlist">
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <h4>
                  Posted by: {comment.author} on{" "}
                  {comment.created_at.substring(0, 10)}
                </h4>
                <p>{comment.body}</p>

                <Voter
                  id={comment.comment_id}
                  type={"comments"}
                  votes={comment.votes}
                />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
  handleClick = (clickEvent) => {
    this.setState({ isLoading: true });
    console.log(this.state);
    const sort = clickEvent.target.name;
    const { id } = this.props;
    const { order } = this.state;

    if (this.state.order === "desc") {
      api.getComments(id, sort, order).then((res) => {
        this.setState({
          comments: res,
          sort_by: sort,
          order: "asc",
          isLoading: false,
        });
      });
    } else {
      api.getComments(id, sort, order).then((res) => {
        this.setState({
          comments: res,
          sort_by: sort,
          order: "desc",
          isLoading: false,
        });
      });
    }
  };
}

export default Comments;
