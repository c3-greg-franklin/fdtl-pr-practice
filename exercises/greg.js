// FDTL exercise: fix the bug in greet().
// It should return "Hello, <name>!" but the exclamation mark is missing.
//
// Copy this file to exercises/<your-name>.js, fix the bug there, and open a PR.
function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = { greet };
