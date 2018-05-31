"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Commands;

function Commands(commands) {
  return (target, key, descriptor) => {
    return descriptor;
  };
}