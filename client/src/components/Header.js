import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Header = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await axios.get("/account/authenticated");
      if (res.data === true) {
        setAuthenticated(true);
      }
    };
    checkAuth();
  }, []);

  const signOut = () => {
    alert("sign out");
  };

  return (
    <nav>
      {authenticated ? (
        <a onClick={signOut}>Sign Out</a>
      ) : (
        <Link to="/login">Log In</Link>
      )}{" "}
      | <Link to="/">Home</Link> | <Link to="/page">Page</Link>
    </nav>
  );
};

export default Header;
