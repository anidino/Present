import React from 'react';
import { MDBCol } from "mdbreact";

// function Search() {
//     return (
//         <section>
//             <div class="input-group">
//                 <div class="form-outline">
//                     <input id="search-focus" type="search" id="form1" class="form-control" />
//                     <label class="form-label" for="form1">Search</label>
//                 </div>
//                 <button type="button" class="btn btn-primary">
//                     <i class="fas fa-search"></i>
//                 </button>
//             </div>
//         </section>
//     );

// }

// export default Search;




const Search = () => {
  return (
    <MDBCol md="6">
      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
    </MDBCol>
  );
}

export default Search;