"use strict";

const countProps = function(obj) {
    let count = 0;
    const keys = Object.keys(obj);
    for (const key of keys) {
        count++;
    }
    return count;
};

console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));