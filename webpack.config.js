var path = require('path');

module.exports = {
    entry: [
        './src/js/timezone.js',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'timezone.js',
    },
};