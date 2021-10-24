import React from "react";
import Profile from "./components/Profile";
import Time from "./components/Time";
import Quote from "./components/Quote";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Gallery from "./components/Gallery";
import Donate from "./components/Donate";
import Logout from "./components/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <Nav></Nav>
      <Time></Time>
      <Quote></Quote>

      <main>
        <Search></Search>
        <Gallery></Gallery>
        <Donate></Donate>
        <Profile></Profile>
      </main>
      <div>
        <Logout></Logout>
      </div>
    </div>
  );
}

export default App;
