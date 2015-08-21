var path = require('path');
var Builder = require('systemjs-builder');

var builder = new Builder({
  baseURL: 'file:' + path.resolve('src'),

  // opt in to Babel for transpiling over Traceur
  transpiler: 'babel'
})
.build('main', 'target/systemjs/outfile.js')
.then(function() {
  console.log('Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});