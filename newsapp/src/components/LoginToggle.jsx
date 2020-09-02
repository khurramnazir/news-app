import React from "react";

import { Link } from "@reach/router";

const LoginToggle = (props) => {
  return (
    <Link to="/">
      <button
        onClick={() => {
          // setUser(props.currentUser);

          localStorage.setItem("user", JSON.stringify(props.currentUser));
          window.location.reload();
        }}
      >
        Log in
      </button>
    </Link>
  );
};

export default LoginToggle;
