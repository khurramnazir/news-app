import React, { useContext } from "react";
import { Link } from "@reach/router";
import SearchBar from "./SearchBar";
import userContext from "./userContext";

const Header = () => {
  const user = useContext(userContext);
  console.log(user);
  return (
    <header>
      {/* <SearchBar /> */}
      <Link to={"/"}>
        <button className="HomeButton">HOME</button>
      </Link>
      <h1>Truthy News</h1>
      <Link to="/login">
        <button>LOG IN</button>
      </Link>
      {/* <button onClick={clearStorage}>LOG OUT</button>
      <h3>Logged in as {JSON.parse(localStorage.getItem("user")).username} </h3>
      <img
        src={JSON.parse(localStorage.getItem("user")).avatar_url}
        alt=""
        width="100"
        height="100"
      /> */}
    </header>
  );
};

const clearStorage = (clickEvent) => {
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

export default Header;
