import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
 
const Logo = (props) => {
    return (
              <div>
                <Jumbotron>
                  <h1 className="display-3" id="present"><span role="img" aria-label="music"> ♫</span>Present!</h1>
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </Jumbotron>
              </div>
            );
          };

        // <div class="container-fluid" id="logo-box">
        // <h1 class="present" id="present"><span role="img" aria-label="music"> ♫</span>Present</h1>
        // </div>
export default Logo;