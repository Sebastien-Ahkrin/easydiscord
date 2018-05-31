"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Command;

function Command(regex, options) {
  return (target, key, descriptor) => {
    target.addCommand(regex, descriptor.value, options);
    return descriptor;
  };
}