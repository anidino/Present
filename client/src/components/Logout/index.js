import React from "react";
import auth from "../../utils/auth";

function Logout() {
  const logOut = () => {
    //delete token and go to login page
    auth.logout();
  };
  return (
    <section className="my-5">
      <h4 class="subhead" id="logout">
        Are you sure you want to log out?
      </h4>
      <button type="button" onClick={logOut} class="btn btn-secondary btn-lg btn-block">
        Log Out
      </button>
    </section>
  );
}

export default Logout;
