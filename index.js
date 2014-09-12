'use strict';

var isArray = Array.isArray || function(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

module.exports = function(_) {

  _ = _ || {
    isArray: isArray
  };

  _.loop = function(array, iterate, callback) {
    if (_.isArray(array) && iterate > 0) {
      var i = 0;
      for (var s = 0; s <= iterate; s++) {
        callback(array[i], s);
        ++i;
        i = i > array.length - 1 ? 0 : i;
      }
    }
  };

  _.loopFrom = function(array, startIndex, iterate, callback) {
    if (_.isArray(array) && iterate > 0 && startIndex < array.length) {
      var i = startIndex;
      for (var s = 0; s <= iterate; s++) {
        callback(array[i], s);
        ++i;
        i = i > array.length - 1 ? 0 : i;
      }
    }
  };

  return _;

};
