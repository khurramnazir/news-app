import React, { Component } from "react";

class FilterBar extends Component {
  render() {
    return (
      <section className="filter">
        <button>Votes</button>
        <button>Comments</button>
      </section>
    );
  }
}

export default FilterBar;
