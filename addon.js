(function () {
  'use strict';

  var addon = require('./build/Release/addon.node');

  var x = new Float32Array([1, 2, 3]),
      y = new Float32Array([3, 2, 1]);

  console.log(addon.sasum(3, x, 1));

  // y := x + y
  addon.saxpy(3, 1, x, 1, y, 1);
  console.log(y);

  // x := y
  addon.scopy(3, y, 1, x, 1);
  console.log(x);

  console.log(addon.sdot(3, x, 1, y, 1));
}());
