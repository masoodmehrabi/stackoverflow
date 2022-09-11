let a = []; // Create a new empty array.
a[5] = 5; // Perfectly legal JavaScript that resizes the array.

for (let i = 0; i < a.length; i++) {
  // Iterate over numeric indexes from 0 to 5, as everyone expects.
  console.log(a[i]);
}
/* Will display:
   undefined
   undefined
   undefined
   undefined
   undefined
   5
*/

console.log("----------------------");
a = [];
a[5] = "someValue";
a[12] = "Some Other Value";
for (let x in a) {
  // Shows only the explicitly set index of "5", and ignores 0-4
  console.log(x);
}

/* Will display:
   5
*/
