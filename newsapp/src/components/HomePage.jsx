import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import * as api from "../utils/api";
import FilterBar from "./FilterBar";

class HomePage extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getAllArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading) return <h3>Hold on whilst we fetch the Truthy</h3>;
    return (
      <main className="content">
        <h2>The Home Page</h2>
        <FilterBar />
        <body>
          <ArticlesList articles={articles} />
        </body>
      </main>
    );
  }
}

export default HomePage;
