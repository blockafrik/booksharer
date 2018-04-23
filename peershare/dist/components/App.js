"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bootstrap = require("./Bootstrap");

var _Bootstrap2 = _interopRequireDefault(_Bootstrap);

var _ErrorPage = require("./ErrorPage");

var _ErrorPage2 = _interopRequireDefault(_ErrorPage);

var _reactFrozenhead = require("react-frozenhead");

var _reactFrozenhead2 = _interopRequireDefault(_reactFrozenhead);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SupportStore = require("../stores/SupportStore");

var _SupportStore2 = _interopRequireDefault(_SupportStore);

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = _SupportStore2.default.getState();

    _this._onChange = function () {
      _this.setState(_SupportStore2.default.getState());
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _SupportStore2.default.listen(this._onChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _SupportStore2.default.unlisten(this._onChange);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "html",
        { lang: "en" },
        _react2.default.createElement(
          _reactFrozenhead2.default,
          null,
          _react2.default.createElement("meta", { charSet: "utf-8" }),
          _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
          _react2.default.createElement("meta", { property: "og:url", content: "https://file.pizza" }),
          _react2.default.createElement("meta", {
            property: "og:title",
            content: "Booksharer"
          }),
          _react2.default.createElement("meta", {
            property: "og:description",
            content: "Peer-to-peer book sharing"
          }),
          _react2.default.createElement(
            "title",
            null,
            "FilePizza - Your files, delivered."
          ),
          _react2.default.createElement("link", { rel: "stylesheet", href: "/fonts/fonts.css" }),
          _react2.default.createElement(_Bootstrap2.default, { data: this.props.data }),
          _react2.default.createElement("script", { src: "https://cdn.jsdelivr.net/webtorrent/latest/webtorrent.min.js" }),
          _react2.default.createElement("script", { src: "/app.js" })
        ),
        _react2.default.createElement(
          "body",
          null,
          _react2.default.createElement(
            "div",
            { className: "container" },
            this.state.isSupported ? _react2.default.createElement(_reactRouter.RouteHandler, null) : _react2.default.createElement(_ErrorPage2.default, null)
          ),
          _react2.default.createElement("footer", { className: "footer" }),
          _react2.default.createElement(
            "script",
            null,
            "FilePizza()"
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;
module.exports = exports["default"];