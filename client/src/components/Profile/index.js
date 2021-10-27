<<<<<<< HEAD
import React from 'react';
import  { QUERY_USER }  from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { getToken } from '../../utils/auth';


function Profile() {


  const { loading, error, data } = useQuery(QUERY_USER, {
    fetchPolicy: "cache-and-network"
=======
import React from "react";
import { QUERY_USER } from "../../utils/queries";
import { useQuery } from "@apollo/client";

function Profile() {
  const { loading, error } = useQuery(QUERY_USER, {
    fetchPolicy: "cache-and-network",
>>>>>>> main
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

<<<<<<< HEAD
  console.log(error);
  console.log(data);

    return (
<section className="my-5">
  <h4 class="subhead" id="profile">My Profile</h4>

</section>
    );

=======
  return (
    <section className="my-5">
      <h4 class="subhead" id="profile">
        My Profile
      </h4>
    </section>
  );
>>>>>>> main
}

export default Profile;
