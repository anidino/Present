import React from 'react';
import Button from "react-bootstrap/Button";

function Logout() {
    return (
<section className="my-5">
  <h4 id="logout">Are you sure you want to log out?</h4>
  <Button className="alert">Logout</Button>

</section>
    );

}

export default Logout;