import React, { useContext } from "react";
import userContext from "./userContext";
import { Link } from "@reach/router";

const LoginToggle = (props) => {
  const { user, setUser } = useContext(userContext);

  return (
    <Link to={"/"}>
      <button
        onClick={() => {
          setUser(props.currentUser);
          localStorage.setItem("user", JSON.stringify(props.currentUser));
        }}
      >
        Log in
      </button>
    </Link>
  );
};

export default LoginToggle;
