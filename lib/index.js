"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Bot", {
  enumerable: true,
  get: function get() {
    return _Bot.default;
  }
});
Object.defineProperty(exports, "Command", {
  enumerable: true,
  get: function get() {
    return _Command.default;
  }
});
Object.defineProperty(exports, "Commands", {
  enumerable: true,
  get: function get() {
    return _Commands.default;
  }
});
Object.defineProperty(exports, "Config", {
  enumerable: true,
  get: function get() {
    return _Config.default;
  }
});
Object.defineProperty(exports, "Login", {
  enumerable: true,
  get: function get() {
    return _Login.default;
  }
});
Object.defineProperty(exports, "Event", {
  enumerable: true,
  get: function get() {
    return _Event.default;
  }
});

var _Bot = _interopRequireDefault(require("./Bot"));

var _Command = _interopRequireDefault(require("./decorators/Command"));

var _Commands = _interopRequireDefault(require("./decorators/Commands"));

var _Config = _interopRequireDefault(require("./decorators/Config"));

var _Login = _interopRequireDefault(require("./decorators/Login"));

var _Event = _interopRequireDefault(require("./decorators/Event"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }