const fs = require('fs');

const data = fs.readFileSync(0, 'utf-8');

const result = data.replace(
  /\$\$\n(.+?)\$\$\n/sg,
  "\\begin{align*}\n$1\\end{align*}\n"
);

process.stdout.write(result);