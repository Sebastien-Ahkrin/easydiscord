"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Event;

function Event(event) {
  return (target, key, descriptor) => {
    target.addEvent(event, descriptor.value);
    return descriptor;
  };
}