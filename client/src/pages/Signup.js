import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import "../login.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import dancer from '../assets/sign-up-2.jpg';

function Signup(props) {
  const [formState, setFormState] = useState({ name:"", email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
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
        <img class="dancer" id="login-image" src= {dancer}></img>
    </Col>
        <Col>
          <div class="words-box">
            <br></br>
            <h2 class="login"><span role="img" aria-label="music"> ♫</span>Present</h2>
            <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label for="firstName" class="form-label">First name</label>
                <input type="name" class="form-control" id="name" aria-describedby="name" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label for="lastName" class="form-label">Last name</label>
                <input type="name" class="form-control" id="name" aria-describedby="name" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label for="pwd" class="form-label">Password</label>
                <input type="password" class="form-control" type="password" id="pwd" onChange={handleChange} />
              </div>

              <div className="flex-row flex-end">
                <button type="submit" class="quote-button">SIGNUP</button>
              </div>
            </form>
            <Link to="/login" class="signup-link"> or login</Link>
          </div>
        </Col>
      </Row>
    </div>

  );
}

export default Signup;
