const assert = require("assert");
const { replaceLatex } = require("./replace");

assert.equal(
  replaceLatex(
    "$$ \\lnot a $$"
  ),
  "\\begin{align*} \\lnot a \\end{align*}"
)