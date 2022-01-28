// export function date(n) {
//   const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const d = new Date();
//   return weekday[d.getDay() + n];
// }

export function date(n) {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const d = new Date();
  const newWeek = [];

  for (let start = d.getDay(); start < weekday.length; start++) {
    newWeek.push(weekday[start]);
  }

  for (let startTwo = 0; startTwo < d.getDay() - 0; startTwo++) {
    newWeek.push(weekday[startTwo]);
  }
  return newWeek[n];
}

export function time(rawTime) {
  let time;
  time = rawTime.toString();
  time = time.slice(0, 4);
  time = addStr(time, 2, ":");

  let date = new Date(rawTime * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let formattedTime = hours + ":" + minutes.substr(-2);
  return formattedTime;
}

export function todaysDate() {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return date;
}

function addStr(str, index, stringToAdd) {
  return (
    str.substring(0, index) + stringToAdd + str.substring(index, str.length)
  );
}
