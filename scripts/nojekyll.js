const path = require('path');
const fs = require('fs-extra');

const SRC = path.resolve(__dirname, '../.nojekyll');
const DEST = 'out/.nojekyll';

fs.copy(SRC, DEST)
  .then(() => console.log('Files copied to ' + DEST + '::: Success!'))
  .catch((err) => console.error(err));
