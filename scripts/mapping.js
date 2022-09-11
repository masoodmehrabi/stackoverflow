/*
queries['query1'] = require('query1') 
queries['query2'] = require('query2') 
queries['query3'] = require('query3') 

*/

let queries = {
  query1: { a: { $eq: "I am Query 1" }, permission: "user" }, //user can be String or object or whatever !
  query2: { b: { $eq: "I am Query 2" }, permission: "user" },
  query3: { c: { $eq: "I am Query 3" }, permission: "admin" },
};

let declaration = {};
let queryNames = Object.keys(queries);
for (let i in queryNames) {
  let curQueryName = queryNames[i];
  declaration[curQueryName] = queries[curQueryName]["permission"];
  //delete queries[curQueryName]["permission"]
}
console.log(JSON.stringify(declaration, null, 2));
