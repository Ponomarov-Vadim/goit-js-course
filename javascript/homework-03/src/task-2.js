"use strict";

const countProps = function(obj) {
  let count = 0;
  for (const key of Object.keys(obj)) {
    count++;
  }
  return count;
};

console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
