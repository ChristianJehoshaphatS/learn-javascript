console.log("Calendar");

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
  "December"
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const dateToday = {
  createDateObject: (customDate = null) => {
    if (customDate) {
      return new Date(customDate);
    } else {
      return new Date();
    }
  },
  yearNumber: date => {
    return date.getFullYear();
  },
  monthNumber: date => {
    return date.getMonth() + 1;
  },
  monthString: date => {
    const index = date.getMonth();
    return months[index];
  },
  dayNumber: date => {
    return date.getDay();
  },
  dayString: date => {
    const index = date.getDay() - 1;
    return days[index];
  },
  fullDate: date => {
    const day = dateToday.dayString(date);
    const datenumber = dateToday.dayNumber(date);
    const month = dateToday.monthString(date);
    const year = dateToday.yearNumber(date);
    const today = `${day} ${datenumber} ${month} ${year}`;
    return today;
  }
};

const currentTime = {
  Time: time => {
    return time.getTime();
  },
  hours: time => {
    return time.getHours();
  },
  minutes: time => {
    return time.getMinutes();
  },
  seconds: time => {
    return time.getSeconds();
  },
  milliseconds: time => {
    return time.getMilliseconds();
  },
  fulltime: time => {
    const hour = currentTime.hours(time);
    const minute = currentTime.minutes(time);
    const second = currentTime.seconds(time);
    const millisecond = currentTime.milliseconds(time);
    const completeTime = `${hour}:${minute}:${second}:${millisecond}`;
    return completeTime;
  }
};

console.log("Get Todays system date");
const TODAY = dateToday.createDateObject();
console.log(TODAY);

console.log("Get only the Date");
const TODAYdate = dateToday.dayNumber(TODAY) + 16;
console.log(TODAYdate);

console.log("Get only the Name of the Date");
const TODAYname = dateToday.dayString(TODAY);
console.log(TODAYname);

console.log("Get only the Order number of the Month");
const TODAYmonthOrder = dateToday.monthNumber(TODAY);
console.log(TODAYmonthOrder);

console.log("Get only the Name of the Month");
const TODAYmonthName = dateToday.monthString(TODAY);
console.log(TODAYmonthName);

console.log("Get only the Year");
const TODAYyear = dateToday.yearNumber(TODAY);
console.log(TODAYyear);

console.log("Get the full Display of today's date");
const TODAYfull = dateToday.fullDate(TODAY);
console.log(TODAYfull);

console.log(currentTime.hours(TODAY));

console.log("Get Time");
const TIME = currentTime.fulltime(TODAY);
console.log(TIME);
