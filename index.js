const log = require('fancy-log');
const stringsSuite = require('./lib/strings');


stringsSuite.on('cycle', function(event) {
  log(String(event.target));
})
.on('complete', function() {
  log(`Fastest is ${this.filter('fastest').map('name')}`);
});

stringsSuite.run({
  'async': true,
});
