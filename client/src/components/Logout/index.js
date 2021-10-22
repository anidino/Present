import React from 'react';
import Button from "react-bootstrap/Button";

function Logout() {
    return (
<section className="my-5">
  <h1 id="logout">Are you sure you want to logout?</h1>
  <Button className="alert">Logout</Button>

</section>
    );

}

export default Logout;