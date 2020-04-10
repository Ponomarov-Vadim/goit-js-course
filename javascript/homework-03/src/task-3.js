"use strict";
const findBestEmployee = function(employees) {
  let most_productive = 0;
  let name_employee;
  for (const key in employees) {
    if (most_productive < employees[key]) {
      most_productive = employees[key];
      name_employee = key;
    }
  }
  return name_employee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
);

console.log(
  findBestEmployee({
    ann: 12,
    david: 17,
    ajax: 4
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
);
