import React, { Component } from "react";
import * as api from "../utils/api";
import Comments from "./Comments";
import ToggleView from "./ToggleView";
import Voter from "./Voter";
import Loader from "./Loader";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    // sort_by: "created_at",
    // order: "desc",
  };
  componentDidMount() {
    api.getArticleById(this.props.id).then((article) => {
      console.log(article);
      this.setState({ article: article, isLoading: false });
    });
    console.log(this.state);
  }

  render() {
    console.log(this.state);
    const { article, isLoading, sort_by } = this.state;
    console.log(sort_by);

    if (isLoading) return <Loader />;
    return (
      <main>
        <h3> {article.title} </h3>
        <h4>
          Posted by: {article.author} on {article.created_at.substring(0, 10)}
        </h4>
        <p>{article.body}</p>
        <h4>Comments: {article.comment_count}</h4>
        <Voter
          id={article.article_id}
          type={"articles"}
          votes={article.votes}
        />
        <h3>Comments</h3>

        <ToggleView>
          <Comments id={article.article_id} />
        </ToggleView>
      </main>
    );
  }
}

export default SingleArticle;
