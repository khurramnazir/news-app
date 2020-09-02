import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../utils/api";
import FilterBar from "./FilterBar";
import Loader from "./Loader";
import userContext from "./userContext";

class HomePage extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order: "desc",
    currentUser: {},
  };
  static contextType = userContext;

  componentDidMount() {
    const { sort_by, order } = this.state;
    api.getArticles(sort_by, order).then((articles) => {
      this.setState({
        articles,
        isLoading: false,
        currentUser: this.context[0],
      });
    });
  }

  render() {
    console.log(this.context);
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loader />;
    return (
      <main>
        <nav className="filter">
          <label htmlFor="votes">
            Sort Articles By
            <button onClick={this.handleClick} name="votes">
              Votes
            </button>
            <button onClick={this.handleClick} name="comment_count">
              Comments
            </button>
            <button onClick={this.handleClick} name="created_at">
              Date
            </button>
          </label>
          <br />
          <FilterBar sort={this.state.sort_by} order={this.state.order} />
          <br />
        </nav>
        <ArticlesList articles={articles} />
        <footer>THIS IS A FOOTER</footer>
      </main>
    );
  }
  handleClick = (clickEvent) => {
    const sort = clickEvent.target.name;
    this.setState({ isLoading: true });

    if (this.state.order === "desc") {
      api.getArticles(sort, this.state.order).then((res) => {
        this.setState({
          articles: res,
          sort_by: sort,
          order: "asc",
          isLoading: false,
        });
      });
    } else {
      api.getArticles(sort, this.state.order).then((res) => {
        this.setState({
          articles: res,
          sort_by: sort,
          order: "desc",
          isLoading: false,
        });
      });
    }
  };
}

export default HomePage;
