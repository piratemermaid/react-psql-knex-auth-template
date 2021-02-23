import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/page">Page</Link>
    </nav>
  );
};

export default Header;
