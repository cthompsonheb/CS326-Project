"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("navbar");

var NavigationBar = function (_React$Component) {
  _inherits(NavigationBar, _React$Component);

  function NavigationBar() {
    _classCallCheck(this, NavigationBar);

    return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call(this));
  }

  _createClass(NavigationBar, [{
    key: "render",
    value: function render() {
      var page = window.location.pathname;
      var cnameEdit = void 0;
      var cnamePrev = void 0;
      var cnameView = void 0;
      cnameEdit = page === "/EditView.html" ? "nav-link active" : "nav-link";
      cnamePrev = page === "/PreviousEntriesView.html" ? "nav-link active" : "nav-link";
      cnameView = page === "/JournalEntryView.html" ? "nav-link active" : "nav-link";
      return React.createElement(
        "nav",
        { className: "navbar navbar-expand-lg navbar-light bg-light" },
        React.createElement(
          "a",
          { className: "navbar-brand", href: "./index.html" },
          "JournalZ"
        ),
        React.createElement(
          "button",
          { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
          React.createElement("span", { className: "navbar-toggler-icon" })
        ),
        React.createElement(
          "div",
          { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
          React.createElement(
            "ul",
            { className: "navbar-nav mr-auto" },
            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "a",
                { className: cnameEdit, href: "EditView.html" },
                "Edit Journal Entry"
              )
            ),
            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "a",
                { className: cnamePrev, href: "PreviousEntriesView.html" },
                "Previous Entries"
              )
            ),
            React.createElement(
              "li",
              { className: "nav-item" },
              React.createElement(
                "a",
                { className: cnameView, href: "JournalEntryView.html" },
                "View Journal Entry"
              )
            )
          )
        )
      );
    }
  }]);

  return NavigationBar;
}(React.Component);

ReactDOM.render(React.createElement(NavigationBar, null), contentNode);