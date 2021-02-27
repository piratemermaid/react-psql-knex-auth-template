import { useState } from "react";
import axios from "axios";
import useInput from "../hooks/useInput";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { value: username, bind: bindUsername } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/account/login", {
        username,
        password
      });
      if (data.errorMessage) {
        setErrorMessage(data.errorMessage);
      } else {
        // TODO: handle successful login
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <div>
          <input type="text" {...bindUsername} />
        </div>
        <div>
          <input type="password" {...bindPassword} />
        </div>
        {errorMessage ? errorMessage : null}
        <button type="submit" onSubmit={submitForm}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Signup;
