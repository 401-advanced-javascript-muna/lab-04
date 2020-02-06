

module.exports = exports = {};

var fileContents = '';

exports.readFile = (file, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  }
  else {
    // eslint-disable-next-line no-undefined
    cb(undefined, Buffer.from(fileContents));
  }
};

exports.writeFile = (file, buffer, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  }
  else {
    fileContents = buffer;
    // eslint-disable-next-line no-undefined
    cb(undefined, true);
  }
};