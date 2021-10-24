import React from 'react';
//import btn from "react-bootstrap/btn";

var dayjs = require('dayjs');
var calendar = require('dayjs/plugin/calendar');
dayjs.extend(calendar);

//dayjs().format();


var now = dayjs()
var currentDate = dayjs().format('dddd, DD MMMM YYYY');
var currentHour = dayjs().format('h');
var testHour = dayjs().hour();
var currentMinute = dayjs().format('mm');
var current12 = dayjs().format('A');


function Time() {
    $('#time').text(currentHour + ":" + currentMinute + current12 + ' ' + currentDate)
        .fadeIn(5000); 
    return (
        <section>
            <btn id="time"> Time and Date Here</btn>
        </section>
    );

}

export default Time;