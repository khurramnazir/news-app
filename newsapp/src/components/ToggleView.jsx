import React, { Component } from "react";

class ToggleView extends Component {
  state = {
    isVisible: true,
  };
  render() {
    console.log(this.props);
    return (
      <section>
        <button className="toggleView" onClick={this.handleClick}>
          {this.state.isVisible ? "Hide Comments" : "Show Comments"}
        </button>
        {this.state.isVisible && this.props.children}
      </section>
    );
  }

  handleClick = (clickEvent) => {
    this.setState((currentState) => {
      return { isVisible: !currentState.isVisible };
    });
  };
}

export default ToggleView;
