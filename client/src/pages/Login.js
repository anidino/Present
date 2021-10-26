import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { MUTATION_LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import dancer from "../assets/dancing_boomer.jpg";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(MUTATION_LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <div class="container-sm" id="login-box">

        <div class="image-box">
          <image src={dancer}></image>
        </div>


        <div class="words-box">
      <h2 class="login">Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">

    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} />
        </div>
        <div className="mb-3">
        <label for="pwd" class="form-label">Password</label>
    <input type="password" class="form-control" type="password" id="pwd" onChange={handleChange} />
        </div>
        
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit" class="quote-button">LOGIN</button>
        </div>
      </form>
      <Link to="/signup" class="signup-link"> or create an account</Link>
    </div>
    </div>
    </div>
  );
}

export default Login;
