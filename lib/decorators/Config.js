"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Config;

var _Bot = _interopRequireDefault(require("../Bot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Config(config) {
  return (target, key, descriptor) => {
    if (target.prototype instanceof _Bot.default) target.prototype._config = config;
    return descriptor;
  };
}