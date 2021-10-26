import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import "../login.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import dancer from "../assets/sign-up-2.jpg";

function Signup(props) {
  const [formState, setFormState] = useState({ name: "", email: "", password: "", firstName: "", lastName: "", username: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
        username: formState.username,
      },
    });

    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div class="container-sm" id="signup-box">
      <Row>
        <Col class="image-box">
          <img class="dancer" id="login-image" src={dancer}></img>
        </Col>
        <Col>
          <div class="words-box">
            <br></br>
            <h2 class="login">
              <span role="img" aria-label="music">
                {" "}
                ♫
              </span>
              Present
            </h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label for="firstName" class="form-label">
                  First name
                </label>
                <input type="name" class="form-control" id="name" aria-describedby="name" name="firstName" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label for="lastName" class="form-label">
                  Last name
                </label>
                <input type="name" class="form-control" id="name" aria-describedby="name" name="lastName" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label for="email" class="form-label">
                  Email address
                </label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" name="email" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label for="email" class="form-label">
                  Username
                </label>
                <input type="text" class="form-control" id="email" aria-describedby="emailHelp" name="username" onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label for="pwd" class="form-label">
                  Password
                </label>
                <input type="password" class="form-control" type="password" id="pwd" name="password" onChange={handleChange} required />
              </div>

              <div className="flex-row flex-end">
                <button type="submit" class="quote-button">
                  SIGNUP
                </button>
              </div>
            </form>
            <Link to="/login" class="signup-link">
              {" "}
              Already have an account?
            </Link>{" "}
            <br></br>
            <Link to="/" class="signup-link">
              <span role="img" aria-label="music">
                {" "}
                ♫
              </span>{" "}
              Home
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
