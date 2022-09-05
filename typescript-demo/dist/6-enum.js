"use strict";
var dir;
(function (dir) {
    dir[dir["north"] = 1] = "north";
    dir[dir["east"] = 11] = "east";
    dir[dir["west"] = 12] = "west";
    dir[dir["south"] = 13] = "south";
})(dir || (dir = {}));
console.log(dir.east);
