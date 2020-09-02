import React, { Component } from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

class Header extends Component {
  state = {
    user: {},
  };
  componentDidMount() {
    this.setState({ user: this.props.user });
  }

  render() {
    return (
      <header className="main-head">
        <StyledLink to="/">
          <h1>Truthy News</h1>
        </StyledLink>

        <Link to="/login">
          <button>
            <FontAwesomeIcon
              color="rgb(51, 102, 153)"
              size="2x"
              icon={faSignInAlt}
            />
            <br />
            Log In
          </button>
        </Link>
        <button onClick={this.clearStorage}>
          <FontAwesomeIcon
            color="rgb(51, 102, 153)"
            size="2x"
            icon={faSignOutAlt}
          />
          <br />
          Log Out
        </button>

        <p>Logged in as {this.props.user.username} </p>
        <img
          src={JSON.parse(localStorage.getItem("user")).avatar_url}
          alt=""
          width="100"
          height="100"
        />
      </header>
    );
  }
  clearStorage = (clickEvent) => {
    localStorage.clear();
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: "guest",
        avatar_url:
          "https://lugyc.com/wp-content/themes/onecommunity/images/avatar.gif",
        name: "guest",
      })
    );
    window.location.reload();
  };
}

export default Header;
