const path = require('path');

module.exports = {
  entry: 'media/icon-aws.png',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'icon-aws.png',
  },
};