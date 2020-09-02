import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../utils/api";

import Loader from "./Loader";
import userContext from "./UserContext";

class HomePage extends Component {
  state = {
    articles: [],
    topics: [],
    isLoading: true,
    sort_by: "created_at",
    order: "desc",
    currentUser: {},
    chosenTopic: "",
  };
  static contextType = userContext;

  componentDidMount() {
    const { sort_by, order, chosenTopic } = this.state;
    api.getArticles(sort_by, order, chosenTopic).then((articles) => {
      this.setState({
        articles,
        isLoading: false,
        currentUser: this.context[0],
        chosenTopic: chosenTopic,
      });
    });
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { sort_by, order, chosenTopic } = this.state;
    if (prevState.chosenTopic !== this.state.chosenTopic) {
      api.getArticles(sort_by, order, chosenTopic).then((articles) => {
        this.setState({
          articles,
          isLoading: false,
          currentUser: this.context[0],
          chosenTopic: chosenTopic,
        });
      });
      api.getTopics().then((topics) => {
        this.setState({ topics });
      });
    }
  }

  render() {
    console.log(this.state);
    const { articles, isLoading, topics } = this.state;
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
          <label htmlFor="topicsList">
            Filter by Topic
            <select
              onChange={this.handleSelect}
              name="topicsList"
              id="topicsList"
            >
              <option disabled selected value>
                {" "}
                -- select an option --{" "}
              </option>
              {topics.map((topic) => {
                return (
                  <option key={topic.slug} value={topic.slug}>
                    {topic.slug}
                  </option>
                );
              })}
            </select>
          </label>

          <br />
        </nav>
        <ArticlesList articles={articles} />
        <footer className="footer">THIS IS A FOOTER</footer>
      </main>
    );
  }
  handleClick = (clickEvent) => {
    const sort = clickEvent.target.name;
    this.setState({ isLoading: true });

    if (this.state.order === "desc") {
      api
        .getArticles(sort, this.state.order, this.state.chosenTopic)
        .then((res) => {
          this.setState({
            articles: res,
            sort_by: sort,
            order: "asc",
            isLoading: false,
          });
        });
    } else {
      api
        .getArticles(sort, this.state.order, this.state.chosenTopic)
        .then((res) => {
          this.setState({
            articles: res,
            sort_by: sort,
            order: "desc",
            isLoading: false,
          });
        });
    }
  };
  handleSelect = (clickEvent) => {
    this.setState({ chosenTopic: clickEvent.target.value });
  };
}

export default HomePage;
