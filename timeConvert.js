const cliEnteredData = `8:03 AM`;
let enteredTime = new Date(cliEnteredData);
console.log(enteredTime);

const intToHHMM = function (time) {
  let nowTime = new Date();
  //   console.log(nowTime.getDate());
  //   console.log(cliEnteredData.split(":"));

  let enteredArr = time.split(":");

  let entHour = parseInt(enteredArr[0]);
  let entMin = parseInt(enteredArr[1]);

  let todayStr = `${nowTime.getFullYear()}-${nowTime.getMonth()}-${nowTime.getDate()}`;

  console.log(`${todayStr} ${entHour}:${entMin}`);
  console.log(new Date(todayStr));

  var sec_num = parseInt(time, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes;
};

// console.log(intToHHMM(cliEnteredData));

// console.log(new Date("09/10/2022 8:03 AM"));

let nowTime = new Date();
console.log(nowTime.getDate(), nowTime.getFullYear(), nowTime.getMonth());

console.log(`\n\n\n--------\n\n\n`);
function addMins(start, minsToAdd) {
  let am_pm = start.split(" ")[1];
  let [hr, min] = start.split(" ")[0].split(":");
  let future = "";
  min = parseInt(min) + minsToAdd;
  if (min > 59) {
    min = min - 60;
    hr = parseInt(hr) + 1;
    am_pm =
      hr > 11 ? (am_pm === "PM" ? "AM" : "PM") : am_pm === "AM" ? "PM" : "AM";
    hr = hr > 12 ? hr - 12 : hr;
    future = [
      `${parseInt(hr)}`.length === 1 ? `0${hr}` : `${hr}`,
      `${min}`.length === 1 ? `0${min}` : `${min}`,
      am_pm,
    ].join(":");
  } else {
    future = [
      `${hr}`.length === 1 ? `0${hr}` : `${hr}`,
      `${min}`.length === 1 ? `0${min}` : `${min}`,
      am_pm,
    ].join(":");
  }
  return future;
}

console.log(addMins("11:56 AM", 9)); //12:05:PM
console.log(addMins("11:56 PM", 9)); //12:05:AM
console.log(addMins("19:03 PM", 9)); //19:12:PM

let testArr = ["nide", 3, "345", "hhi", 1234];
console.log(testArr.join("\\/"));
