const Benchmark = require('benchmark');


let suite = new Benchmark.Suite;


const number = 42;

suite.add('String from number via interpolation', function() {
  `${number}`;
});

suite.add('String from number via addition', function() {
  "" + number;
});

suite.add('String from number via toString', function() {
  number.toString();
});

suite.add('String from number via String()', function() {
  String(number);
});


module.exports = suite;
