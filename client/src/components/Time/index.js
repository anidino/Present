import React from 'react';
import $ from 'jquery';

var dayjs = require('dayjs');
var calendar = require('dayjs/plugin/calendar');
dayjs.extend(calendar);




function Time() {
<<<<<<< HEAD
    //var now = dayjs()
    var currentDate = dayjs().format('dddd, DD MMMM YYYY');
    var currentHour = dayjs().format('h');
    var currentMinute = dayjs().format('mm');
    var current12 = dayjs().format('A');
        $('#time').text(currentHour + ":" + currentMinute + current12 + ' ' + currentDate)
            .fadeIn(5000); 
        return (
            <section>
                 <btn id="time"> Time and Date Here</btn>
            </section>
=======
    return (
        <section>
           <h2 id="time">Time/Date Here</h2>
        </section>

>>>>>>> b0f74905da8ec1fcd2360b9f626d12b5b9a013a9
    );

}

export default Time;