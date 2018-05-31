"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Login;

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function Login(token) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(function* (target, key, descriptor) {
        target._token = token;
        target.LoginBot().then(descriptor.value).catch(console.error);
        return descriptor;
      });

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}