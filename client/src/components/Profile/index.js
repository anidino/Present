import React from 'react';
// import  { QUERY_USER }  from '../../utils/queries';
import { useQuery } from '@apollo/client';



function Profile() {

  // const queryUser = useQuery(QUERY_USER);

  // console.log(queryUser);

    return (
<section className="my-5">
  <h4 class="subhead" id="profile">My Profile</h4>

</section>
    );

}

export default Profile;