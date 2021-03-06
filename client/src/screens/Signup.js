import { useState } from "react";
import axios from "axios";
import useInput from "../hooks/useInput";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { value: username, bind: bindUsername } = useInput("");
  const { value: email, bind: bindEmail } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/account/signup", {
        username,
        email,
        password
      });
      if (data.errorMessage) {
        setErrorMessage(data.errorMessage);
      } else {
        // TODO: handle successful signup
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={submitForm}>
        <div>
          <input type="text" placeholder="Username" {...bindUsername} />
        </div>
        <div>
          <input type="email" placeholder="Email" {...bindEmail} />
        </div>
        <div>
          <input type="password" placeholder="Password" {...bindPassword} />
        </div>
        {errorMessage ? errorMessage : null}
        <button type="submit" onSubmit={submitForm}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
