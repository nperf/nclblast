(function () {
  'use strict';

  var addon = require('./build/Release/addon.node');

  var x = new Float32Array([1, 2, 3]),
      y = new Float32Array([3, 2, 1]);

  console.log(addon.sasum(3, x, 1));

  addon.saxpy(3, 1, x, 1, y, 1);
  console.log(y);
}());
