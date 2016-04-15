(function () {
  'use strict';

  var addon = require('./build/Release/addon.node');

  for (var n = 1; n < 1000; n++) {
    var x = new Float32Array(n),
        y = new Float32Array(n);
    console.log(n);
    addon.sasum(n, x, 1);
    //addon.saxpy(n, 1, x, 1, y, 1);
  }
}());
