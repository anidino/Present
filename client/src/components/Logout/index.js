import React from 'react';

function removeToken() {
  document.cookie='toekn=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
}

function Logout() {
  removeToken();
    return (
<section className="my-5">
  <h4 class="subhead" id="logout">Are you sure you want to log out?</h4>
  <button type="button" class="btn btn-secondary btn-lg btn-block">Log Out</button>

</section>
    );

}

export default Logout;