/*
 * Student Name: Parker Ritchie
 * Student ID: ritc0067 (student # 040588630)
 * Course: CST8117 - Cross-Platform Web Design
 * Semester: Fall 2025
 * Assignment: Assignment 3
 * Date Submitted: Nov 17th 2025
 */

function isValidEmail(email) {
    let regex = /^[a-zA-Z]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
console.log("Email Tests");
console.log(isValidEmail("myEmail1@email.com")); // true
console.log(isValidEmail("my.Email1@e-mail.com")); // true
console.log(isValidEmail("myEmail1@email.c")); // false
console.log(isValidEmail("m@email1.com")); // false
console.log(isValidEmail(1)); // false
console.log(isValidEmail(true)); // false
console.log(isValidEmail("myEmail1@com")); // false
console.log(isValidEmail("my_Email1@e.com")); // true
console.log(isValidEmail("1m@email.com")); // false
console.log(isValidEmail("my!Email@email.com")); // false

function isAgeOfMajority(birthYear, birthMonth, birthDay) {

    const TODAY = new Date();
    // Question 1
    // The return values for the date constructor are a new Date object containing the timestamp which is the number of milliseconds since Jan 1st 1970 UTC,
    // and the time zone offset, based on the location the user's device. When called to be shown the date is formatted as a date time string(YYYY-MM-DDTHH:mm:ss.sssZ).
    // In this format the Z represents the timezone offset and the rest is formatted as a string to represent the time based on the number of millisecond since Jan 1st 1970 UTC
    var birthdate = new Date(`${birthMonth}/${birthDay}/${birthYear}`);
    // Question 2
    // I believe we use concatenated date data as the date method accepts mm/dd/yyyy as a starting format,
    // this format also bypasses the date method's normal month index where the months are shifted with Jan start at 0 rather than 1, using the date as a string,
    // we do not need to modify the data before passing it into a new date.

    return ( // rather than use a large if structure, if all these statements result in true the function returns true
        (birthdate.getDate() == birthDay) && // check for improper dates that cause the month to roll over
        (typeof birthYear == "number" && birthYear >= 1920 && birthYear <= 2010) && // true if birth year is a number and between 1920 and 2010
        (typeof birthMonth == "number" && birthMonth >= 1 && birthMonth <= 12) && // true if birth month is a number and between 1 and 12
        (typeof birthDay == "number" && birthDay >= 1 && birthDay <= 31) && // true if birthday is a number and between 1 and 31
        (TODAY - birthdate > 567648000000))// true if the difference between birth date and TODAY is more than the milliseconds in 6570 days
}
console.log("Age Tests");
console.log(isAgeOfMajority(2005,2,25)); // true – just old enough
console.log(isAgeOfMajority(1997,2,29)); // false – not a leap year
console.log(isAgeOfMajority(2008,5,1)); // false
console.log(isAgeOfMajority(2000,1,1)); // true
console.log(isAgeOfMajority(1980,12,31)); // true
console.log(isAgeOfMajority("1980","12",31)); // false – wrong data type in parameter


//***************************************************************************************
//*    Title: Mobile Navigation Bar
//*    Author: W3schools
//*    Date: n.d.
//*    Code version: ES2025
//*    Availability: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
//*
//***************************************************************************************/
function hamburgerMenu(){ // used to display/hide the menu options of my hamburger menu
    var burgerLinks = document.getElementById("burgerlinks");
    if (burgerLinks.style.display === "block") {
        burgerLinks.style.display = "none";
    }
    else {
        burgerLinks.style.display = "block";
    }
}