/**
 * Created by masood on 9/10/22.
 */
const url = require("url");
const http = require("http");
const sizeOf = require("image-size");

const callHttp = async (youtubeId, options) => {
  return new Promise(async (resolve) => {
    console.log("DOING ....");

    http.get(options, function (response) {
      let chunks = [];
      response
        .on("data", function (chunk) {
          // chunks.push(chunk);
        })
        .on("end", function () {
          // const buffer = Buffer.concat(chunks);
          // console.log(` ${JSON.stringify(sizeOf(buffer))}`);
          console.log("END", youtubeId);
          resolve();
        });
    });

    // resolve();
  });
};

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

//example array
const myArr = [
  "ficzsusamA0Mw",
  "ficzsusamA0Mw",
  "ficzsusamA0Mw",
  "ficzsusamA0Mw",
  "ficzsusamA0Mw",
  "ficzsusamA0Mw",
  "ficzsusamA0Mw",
  "ficzsusamA0Mw",
  "ficzsusamA0Mw",
  "ficzsusamA0Mw",
  "ficzsusamA0Mw",
  "ficzsusamA0Mw",
  "ficzsusamA0Mw",
  "ficzsusamA0Mw",
  "ficzsusamA0Mw",
];
(async () => {
  for (let i = 0; i < myArr.length; i++) {
    console.log(i);
    // const imgUrl = `http://img.youtube.com/vi/${myArr[i]}/maxresdefault.jpg`;
    const imgUrl = `http://google.com`;
    const options = url.parse(imgUrl);
    console.log("Going to call", myArr[i]);
    await callHttp(myArr[i], options);
    // await sleep(100);
    console.log("DOne ! ");
  }
})();

/*
 http.get(options, function (response) {
      let chunks = [];
      response
        .on("data", function (chunk) {
          // chunks.push(chunk);
        })
        .on("end", function () {
          // const buffer = Buffer.concat(chunks);
          // console.log(` ${JSON.stringify(sizeOf(buffer))}`);
          console.log("END", youtubeId);
          resolve;
        });
    });
*/
