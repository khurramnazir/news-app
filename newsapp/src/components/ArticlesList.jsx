import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

const ArticlesList = (articles) => {
  return (
    <ul className="articlelist">
      {articles.articles.map((article) => {
        return (
          <li key={article.article_id}>
            <Link to={`articles/${article.article_id}`}>
              <h3> {article.title} </h3>
            </Link>
            <h4>
              Posted by: {article.author} on{" "}
              {article.created_at.substring(0, 10)} in {article.topic}
            </h4>
            <p>{article.body.substring(0, 250) + "..."}</p>
            <Link to={`articles/${article.article_id}/comments`}>
              <h4>Comments: {article.comment_count}</h4>
            </Link>
            {/* {JSON.parse(localStorage.getItem("user")).username !== "guest" ? (
              <Voter
                id={article.article_id}
                type={"articles"}
                votes={article.votes}
              />
            ) : (
              <h2>Log in to vote</h2>
            )} */}
          </li>
        );
      })}
    </ul>
  );
};

export default ArticlesList;
