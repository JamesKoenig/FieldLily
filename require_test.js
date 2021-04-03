const Module = require("module");
const path = require("path");

const createRequire = Module.createRequire || Module.createRequireFromPath;

const cwd = process.cwd();

console.log(`current directory is: ${cwd}`);

try {
  console.log(createRequire(path.join(cwd, "__placeholder__.js")).resolve("eslint-plugin-react"));
} catch (error) {
  console.log(error);
  console.log(error.message);
}

