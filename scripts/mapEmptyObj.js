const dayjs = require("dayjs");
const { ConsoleWriter } = require("istanbul-lib-report");
const reserveList = [
  { name: "john", start: "2022-09-01" },
  { name: "mark", start: "2022-09-02" },
  { name: "ken", start: "2022-09-03" },
  { name: "sara", start: "2022-09-05" },
  { name: "amir", start: "2022-09-10" },
  { name: "Masood", start: "2022-09-13" },
];

const newList = () => {
  let editedList = [];
  for (let index in reserveList) {
    // console.log("LOOP", index, typeof index);
    // console.log(reserveList[index]);
    // console.log(reserveList[parseInt(index) + 1]);

    editedList.push(reserveList[parseInt(index)]);
    if (parseInt(index) <= reserveList.length - 2) {
      console.log(
        reserveList[parseInt(index) + 1].start,
        reserveList[parseInt(index)].start
      );

      let diffVal = dayjs(reserveList[parseInt(index) + 1].start).diff(
        reserveList[index].start,
        "d"
      );
      console.log(diffVal);

      if (diffVal > 1) {
        for (let j = 1; j < diffVal; j++) {
          editedList.push({});
        }
      }
    }

  }
  return editedList;
};
let editedlist = newList();
console.log(reserveList);
console.log(editedlist);

console.log(dayjs("2022-9-12").diff("2022-09-11", "d"));
