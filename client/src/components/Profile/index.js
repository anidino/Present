import React from "react";
import { QUERY_USER } from "../../utils/queries";
import { useQuery } from "@apollo/client";

function Profile() {
  const { loading, error } = useQuery(QUERY_USER, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <section className="my-5">
      <h4 class="subhead" id="profile">
        My Profile
      </h4>
    </section>
  );
}

export default Profile;
