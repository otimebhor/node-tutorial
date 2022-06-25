const path = require('path')

// returns a platform specific separator
console.log(path.sep)

// joins a sequence of path segment using the platform separator as a delimiter
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// returns the last portion of the path
const base = path.basename(filePath)
console.log(base)

// returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)