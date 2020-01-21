"use strict";
const findBestEmployee = function(employees) {
    const keys = Object.values(employees);
    let most_productive;
    let name_employee;
    for (let index = 0; index < keys.length; index++) {
        if (most_productive < keys[index]) {
            most_productive = keys[index];
            name_employee = keys;
        }
    }
    // something wrong in this place
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