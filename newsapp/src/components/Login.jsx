import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";

import userContext from "./UserContext";

import LoginToggle from "./LoginToggle";

class Login extends Component {
  state = {
    users: [],
    isLoading: true,
    currentUser: {},
  };

  static contextType = userContext;

  componentDidMount() {
    api.getUsers().then((users) => {
      this.setState({ users, isLoading: false, currentUser: this.context[0] });
    });
  }
  render() {
    console.log(this.state);
    const { users, isLoading } = this.state;

    if (isLoading) return <Loader />;
    return (
      <form>
        <label htmlFor="userList">
          Filter by User
          <select onChange={this.handleSelect} name="userList" id="userList">
            <option disabled selected value>
              {" "}
              -- select an option --{" "}
            </option>
            {users.map((user) => {
              return (
                <option key={user.username} value={user.username}>
                  {user.username}
                </option>
              );
            })}
          </select>
        </label>

        <LoginToggle currentUser={this.state.currentUser} />
      </form>
    );
  }
  handleSelect = (clickEvent) => {
    let userArr = this.state.users;

    let newArr = userArr.filter(function (user) {
      return user.username === clickEvent.target.value;
    });

    this.setState({ currentUser: newArr[0] });
  };

  handleClick = (clickEvent) => {
    // clickEvent.preventDefault();
    // useNavigate("/", { state: { test: "test" } });
  };
}

export default Login;
