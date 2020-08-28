import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import "./layout.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <HomePage path="/" />
      </Router>
    </div>
  );
}

export default App;
