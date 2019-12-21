const fs = require('fs');

const replaceLatex =
  data => data.replace(
    /\$\$\n(.+?)\$\$\n/sg,
    "\\begin{align*}\n$1\\end{align*}\n"
  );

function main() {
  const data = fs.readFileSync(0, 'utf-8');
  const result = replaceLatex(data);
  process.stdout.write(result);
}

if (require.main === module) {
  main();
}

module.exports = {
  replaceLatex
}
