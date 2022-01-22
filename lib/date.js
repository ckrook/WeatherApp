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
  console.log(newWeek);
  return newWeek[n];
}
