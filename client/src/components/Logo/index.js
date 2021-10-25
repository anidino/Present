import React from 'react';
import { Jumbotron } from 'reactstrap';
import moment from 'moment';
 
const day = moment().format("dddd");
const date = moment().format("MMMM D, YYYY");

const Logo = (props) => {
    return (
              <div id="logo-box">
                <Jumbotron>
                  <h1 className="display-3" class="present" id="present"><span role="img" aria-label="music"> ♫</span>Present</h1>
                  <p className="lead" class="jumbotext">Today is {day} {date}. </p>
                  <hr className="my-2" />
                </Jumbotron>
              </div>
            );
          };

        // <div class="container-fluid" id="logo-box">
        // <h1 class="present" id="present"><span role="img" aria-label="music"> ♫</span>Present</h1>
        // </div>
export default Logo;