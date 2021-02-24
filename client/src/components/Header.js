import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Header = (props) => {
  useEffect(() => {
    const checkAuth = async () => {
      const res = await axios.get("/user/authenticated");
      console.log(res.data);
    };
    checkAuth();
  }, []);

  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/page">Page</Link>
    </nav>
  );
};

export default Header;
