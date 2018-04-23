'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.exists = exists;
exports.find = find;
exports.remove = remove;

var _toppings = require('./toppings');

var _toppings2 = _interopRequireDefault(_toppings);

var _xkcdPassword = require('xkcd-password');

var _xkcdPassword2 = _interopRequireDefault(_xkcdPassword);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOKEN_OPTIONS = {
  numWords: 4,
  minLength: 3,
  maxLength: 20
};

var tokens = {};
var tokenGenerator = new _xkcdPassword2.default();
tokenGenerator.initWithWordList(_toppings2.default);

function create(socket) {

  return tokenGenerator.generate(TOKEN_OPTIONS).then(function (parts) {
    var token = parts.join('-');
    var result = {
      token: token,
      socket: socket
    };

    tokens[token] = result;
    return result;
  });
}

function exists(token) {
  return token in tokens;
}

function find(token) {
  return tokens[token];
}

function remove(client) {
  if (client == null) return;
  delete tokens[client.token];
}