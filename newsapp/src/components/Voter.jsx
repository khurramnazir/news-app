import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
  state = {
    optimisticVotes: 0,
  };
  render() {
    const { votes } = this.props;
    const { optimisticVotes } = this.state;
    return (
      <section>
        Votes:
        {votes + optimisticVotes}
        <br />
        <button
          onClick={(event) => this.updateVote(1)}
          disabled={optimisticVotes === 1}
        >
          LIKE!
        </button>
        <button
          onClick={(event) => this.updateVote(-1)}
          disabled={optimisticVotes === -1}
        >
          DISLIKE!!!
        </button>
      </section>
    );
  }

  updateVote = (vote) => {
    api.patchVotes(this.props.id, vote, this.props.type);
    this.setState((currentState) => {
      return { optimisticVotes: currentState.optimisticVotes + vote };
    });
  };
}

export default Voter;
