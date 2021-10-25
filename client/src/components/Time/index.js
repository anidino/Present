import moment from 'moment';
import React from 'react';


const day = moment().format("dddd");
const date = moment().format("MMMM D, YYYY");

function Time(props) {

    return (
        <section>
            <h2 id="time">Today is {day} {date}. </h2>
        </section>
    );

}

export default Time;