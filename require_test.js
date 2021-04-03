const Module = require("module");
const path = require("path");

const createRequire = Module.createRequire || Module.createRequireFromPath;

const cwd = process.cwd();

console.log(`current directory is: ${cwd}`);

console.log(createRequire(path.join(cwd, "__placeholder__.js")).resolve("eslint-plugin-react"));
