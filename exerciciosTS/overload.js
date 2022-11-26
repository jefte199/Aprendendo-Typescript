"use strict";
function myRound(value) {
    if (typeof value === "string") {
        return Math.round(Number(value));
    }
    else {
        return Math.round(value);
    }
}
console.log(myRound("12.56"));
console.log(myRound(15.56));
