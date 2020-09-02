import React, { useState } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import "./layout.css";
import SingleArticle from "./components/SingleArticle";
import Login from "./components/Login";
import SearchResults from "./components/SearchResults";
import Comments from "./components/Comments";
import userContext from "./components/userContext";

function App() {
  // const userHook = useState([
  //   {
  //     username: "guest",
  //     avatar_url:
  //       "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  //     name: "Tom Tickle",
  //   },
  //   () => {},
  // ]);
  const [user, setUser] = useState({
    username: "guest",
    avatar_url:
      "https://lugyc.com/wp-content/themes/onecommunity/images/avatar.gif",
    name: "guest",
  });
  const value = { user, setUser };
  return (
    <div className="App">
      <userContext.Provider value={value}>
        <Header />
        <Router className="content">
          <Login path="/login" />
          <HomePage path="/" />
          <SingleArticle path="articles/:id" />
          <SearchResults path="/searchresults" />
          <Comments path="articles/:id/comments" />
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
