import React from "react";
import useInput from "../hooks/useInput";

const Signup = () => {
  const { value: username, bind: bindUsername } = useInput("");
  const { value: email, bind: bindEmail } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");

  const submitForm = (e) => {
    e.preventDefault();

    console.log("sign up", username, email, password);
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={submitForm}>
        <div>
          <input type="text" {...bindUsername} />
        </div>
        <div>
          <input type="email" {...bindEmail} />
        </div>
        <div>
          <input type="password" {...bindPassword} />
        </div>
        <button type="submit" onSubmit={submitForm}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
