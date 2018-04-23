'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var divStyle = {
  margin: '200px',
  border: '5px solid blue'
};
var pStyle = {
  fontSize: '15px',
  textAlign: 'center'
};

var BooksPage = function (_React$Component) {
  _inherits(BooksPage, _React$Component);

  function BooksPage() {
    _classCallCheck(this, BooksPage);

    var _this2 = _possibleConstructorReturn(this, (BooksPage.__proto__ || Object.getPrototypeOf(BooksPage)).call(this));

    _this2.state = {
      jobs: []
    };
    return _this2;
  }

  _createClass(BooksPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;
      this.serverRequest = _axios2.default.get("http://localhost:3001/blocks").then(function (result) {
        console.log(result.data);
        _this.setState({
          jobs: result.data

        });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.serverRequest.abort();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Books!'
        ),
        this.state.jobs.map(function (job) {
          return _react2.default.createElement(
            'div',
            { key: job.index, style: divStyle, className: 'card' },
            _react2.default.createElement(
              'p',
              null,
              'Block ID : ',
              job.index
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              'Previous Hash : ',
              job.previousHash
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              'Hash : ',
              job.Hash
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'a',
              { href: job.data },
              _react2.default.createElement(
                'button',
                null,
                'View Book'
              )
            )
          );
        })
      );
    }
  }]);

  return BooksPage;
}(_react2.default.Component);

exports.default = BooksPage;
module.exports = exports['default'];