import React from 'react';
import { Jumbotron } from 'reactstrap';
 
const Logo = (props) => {
    return (
              <div id="logo-box">
                <Jumbotron>
                  <h1 className="display-3" class="present" id="present"><span role="img" aria-label="music"> ♫</span>Present</h1>
                  <p className="lead">Interaction made simple. See inspirational quotes, listen to your favorite music, and donate to a worthy cause.</p>
                  <hr className="my-2" />
                  <p>A simple web application that helps users struggling with memory loss and mental illness through the healing power of music.</p>
                </Jumbotron>
              </div>
            );
          };

        // <div class="container-fluid" id="logo-box">
        // <h1 class="present" id="present"><span role="img" aria-label="music"> ♫</span>Present</h1>
        // </div>
export default Logo;