"use strict";
function getHardSeconds() {
    return 3;
}
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Saven"] = 20] = "Saven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["Insane"] = 0] = "Insane";
    Level[Level["Kid"] = 15] = "Kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 9] = "Medium";
    Level[Level["Hard"] = getHardSeconds()] = "Hard";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The level is ${lvl} And number of seconds is ${Level.Hard}`);
}
//# sourceMappingURL=index.js.map