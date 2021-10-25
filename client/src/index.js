import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

//set up router to access browser router in app
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloHooksProvider client={client}>
        <App />
      </ApolloHooksProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
