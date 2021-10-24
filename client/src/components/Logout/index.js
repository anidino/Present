import React from 'react';
import Button from "react-bootstrap/Button";

function Logout() {
    return (
<section className="my-5">
  <h4 class="subhead" id="logout">Are you sure you want to log out?</h4>
  <button type="button" class="btn btn-secondary btn-lg btn-block">Log Out</button>

</section>
    );

}

export default Logout;