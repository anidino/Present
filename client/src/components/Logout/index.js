import React from 'react';
import Button from "react-bootstrap/Button";

function removeToken() {
  document.cookie='toekn=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
}

function Logout() {
  removeToken();
    return (
<section className="my-5">
  <h1 id="logout">Are you sure you want to logout?</h1>
  <Button className="alert">Logout</Button>

</section>
    );

}

export default Logout;