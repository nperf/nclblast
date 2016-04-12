(function () {
  'use strict';

  var addon = require('./build/Release/addon.node');

  var x = new Float32Array([1, 2, 3]);
  console.log(addon.sasum(3, x));
}());
