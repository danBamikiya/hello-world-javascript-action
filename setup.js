"use strict";

const { spawnSync } = require("child_process");

const COMPILE_COMMANDS = ["build", "index.js", "--license", "licenses.txt"];

spawnSync("npm", "i");
spawnSync("ncc", COMPILE_COMMANDS);

// npm i
// ncc build index.js--license licenses.txt
