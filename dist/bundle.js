"use strict";

var updateCursor = function updateCursor(_ref) {
  var x = _ref.x,
    y = _ref.y;
  document.documentElement.style.setProperty('--x', x);
  document.documentElement.style.setProperty('--y', y);
};
document.body.addEventListener('pointermove', updateCursor);
