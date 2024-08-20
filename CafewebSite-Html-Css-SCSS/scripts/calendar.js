'use strict';

// JavaScript source code for Chamberlain Civic Center
// Script Date: February 27, 2024
// Developed by:

/* Purpose: create a JavaScript calendar and highlight the current date

1. getCalendar(calendarDay) - creates the calendar table for the current month
specified in the calendarDay parameter.

2. writeCalTitle(calendarDay) - writes the title row in the calendar table.

3. writeDayNames() - writes the weekday title rows in the calendar table

4. getDaysInMonth(calendarDay) - returns the number of days in the current month from calendarDay

5. writeCalDays(calendarDay) - writes the daily rows in the calendar table, and highlighting calendarDay
*/

/**
 * creates the calendar table for the current month
 * specified in the calendarDay parameter.
 * @param {Date} calendarDay
 */
function getCalendar(calendarDay) {

    // alert("I'm here");
    let calDate;
    if (calendarDay != null) {
        calDate = new Date(calendarDay);
    } else {
        calDate = new Date();
    }

    // create an html table
    document.write('<table id="calendar_table">');

    // call function writeCalTitle(calendarDay)
    writeCalTitle(calDate);

    // call function writeDayNames
    writeDayNames();

    // call writeCalDays function
    writeCalDays(calDate);

    // end table tag
    document.write('</table>');
} // end function getCalendar


/**
 * writes the title row in the calendar table.
 * @param {Date} calendarDay
 */
function writeCalTitle(calendarDay) {
    // declare monthName array
    let monthName = [
        'January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'
    ];

    // extract the current month and year
    let thisMonth = calendarDay.getMonth();
    // alert(thisMonth);
    let thisYear = calendarDay.getFullYear();
    // alert(thisYear);
    // write the table heading
    document.write('<tr>');
    document.write('<th id="calendar_head" colspan="7" class="h3">');
    document.write(monthName[thisMonth] + ' ' + thisYear);
    document.write('</th>');
    document.write('</tr>');
} // end function writeCalTitle

/**
 * writes the weekday title rows in the calendar table
 */
function writeDayNames() {
    // declare an array of day names
    let dayName = [
        'Sun', 'Mon', 'Tue',
        'Wed', 'Thu', 'Fri',
        'Sat'
    ];

    // display day names in a new tr
    document.write('<tr>');
    for (let dayCount = 0; dayCount < dayName.length; dayCount++) {
        document.write('<th>' + dayName[dayCount] + '</th>');
    } // end for loop
    document.write('</tr>');

} // end function writeDayNames


/**
 * returns the number of days in the current month from calendarDay
 * @param {Date} calendarDay
 */
function getDaysInMonth(calendarDay) {
    // extract the current month and year
    let thisMonth = calendarDay.getMonth();
    let thisYear = calendarDay.getFullYear();

    // create dayNumber array
    let dayNumber = [
        31, 28, 31,
        30, 31, 30,
        31, 31, 30,
        31, 30, 31
    ];

    // return the number of days in the current month
    return (dayNumber[thisMonth]);
} // end function getDaysInMonth


/**
 * writes the daily rows in the calendar table, and highlighting calendarDay
 * @param {Date} calendarDay
 */
function writeCalDays(calendarDay) {
    let currentDay = calendarDay.getDate();

    // determine the start of this month
    let dayCount = 1;

    // return the number of days in the current month
    let totalDays = getDaysInMonth(calendarDay);

    // set the day of the first day of this month
    calendarDay.setDate(1);

    // return the day of the week of the first day
    let weekDay = calendarDay.getDay();

    // write blank cells preceding the starting day
    document.write('<tr>');
    for (let weekD = 0; weekD < weekDay; weekD++) {
        // write empty cells
        document.write('<td>&nbsp;</td>');
    }

    // write cells for each day of the month
    while ( dayCount <= totalDays) {
        // write the table rows and cells
        if ( weekDay == 0 && dayCount != 1 )  {
            document.write('<tr>');
        }

        // check if the current day matches any event date
        let currentDate = new Date(calendarDay.getFullYear(), calendarDay.getMonth(), dayCount);
        let isEventDate = events.some(event => {
            return event.date.getTime() === currentDate.getTime();
        });

        // apply calendar date style and highlight event dates
        if ( dayCount === currentDay && isEventDate ) {
            document.write('<td class="calendar_dates highlight_event" id="calendar_today">' + dayCount + '</td>');
        } else if (isEventDate) {
            document.write('<td class="calendar_dates highlight_event">' + dayCount + '</td>');
        } else if (dayCount === currentDay) {
            document.write('<td class="calendar_dates" id="calendar_today">' + dayCount + '</td>');
        } else {
            document.write('<td class="calendar_dates">' + dayCount + '</td>');
        }

        if ( weekDay == 6 ) {
            // close tr
            document.write('</tr>');
        }

        // move to the next day
        dayCount++;
        calendarDay.setDate(dayCount);
        weekDay = calendarDay.getDay();
    } // end while loop
}


// Define the events array
let events = [
    {
        subject: "Dish Creation",
        date: new Date(2024, 3, 16), // Date format: year, month (0-indexed), day
        time: "10:00 AM",
        animator: "Sophia",
        description: "Sophia is a culinary wizard who brings a touch of artistry to every dish she creates."
    },
    {
        subject: "coffee creations",
        date: new Date(2024, 3, 20),
        time: "12:30 PM",
        animator: "Emily",
        description: "Emily takes pride in crafting unique and visually appealing coffee creations, whether it's latte art or specialty drinks inspired by seasonal flavors."
    }
];

// Function to generate dynamic event table
function generateEventTable(events) {
    let tableHTML = '<table>';
    tableHTML += '<thead><tr><th>Subject</th><th>Date</th><th>Time</th><th>Animator</th><th>Description</th></tr></thead>';
    tableHTML += '<tbody>';

    events.forEach(event => {
        tableHTML += '<tr>';
        tableHTML += '<td>' + event.subject + '</td>';
        tableHTML += '<td>' + formatDate(event.date) + '</td>'; // Format date using helper function
        tableHTML += '<td>' + event.time + '</td>';
        tableHTML += '<td>' + event.animator + '</td>';
        tableHTML += '<td>' + event.description + '</td>';
        tableHTML += '</tr>';
    });

    tableHTML += '</tbody>';
    tableHTML += '</table>';

    return tableHTML;
}

// Helper function to format date as "Month Day, Year"
function formatDate(date) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Function to validate email format
function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
