import React from 'react';
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";

const Search = () => {
  return (
<section className="my-5">
<h4 class="subhead" id="playlists">My Playlists</h4>
  <Container>
  <button type="button"  class="btn btn-secondary btn-lg btn-block">Explore Music</button>
  </Container>
  </section>
);
};



export default Search;