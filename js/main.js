// Variables
const dayNumber = document.querySelector(".day-number"); // Day number
const dayName = document.querySelector(".day-name"); // Day name
const monthName = document.querySelector(".month"); // Month name
const year = document.querySelector(".year"); // Year number

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]; // Array of months
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; // Array of days
// End of variables

// Functions

// Set date info
function setDate() {
  const date = new Date();
  dayNumber.textContent = date.getDate();
  dayName.textContent = days[date.getDay()];
  monthName.textContent = months[date.getMonth()];
  year.textContent = date.getFullYear();
}
// End of functions

setDate();
