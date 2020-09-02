import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";

class FilterBar extends Component {
  state = {
    topics: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getTopics().then((topics) => {
      this.setState({ topics, isLoading: false });
    });
  }

  render() {
    const { topics, isLoading } = this.state;

    if (isLoading) return <Loader />;

    return (
      <label htmlFor="topicsList">
        Filter by Topic
        <select name="topicsList" id="topicsList">
          {topics.map((topic) => {
            return (
              <option key={topic.slug} value={topic.slug}>
                {topic.slug}
              </option>
            );
          })}
        </select>
      </label>
    );
  }
}

export default FilterBar;
