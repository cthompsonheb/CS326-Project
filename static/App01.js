"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = {
  current_text: "",
  date: "Today",
  title: ""
};

var style = {
  entryBox: {},
  button: {
    margin: "5px"

  }

  // This grabs the DOM element to be used to mount React components.
};var contentNode = document.getElementById("contents");

var JournalEntry = function (_React$Component) {
  _inherits(JournalEntry, _React$Component);

  function JournalEntry() {
    _classCallCheck(this, JournalEntry);

    var _this = _possibleConstructorReturn(this, (JournalEntry.__proto__ || Object.getPrototypeOf(JournalEntry)).call(this));

    _this.state = state;
    _this.getDate = _this.getDate.bind(_this);
    _this.onsave = _this.onSave.bind(_this);
    return _this;
  }

  _createClass(JournalEntry, [{
    key: "getDate",
    value: function getDate() {
      var date = new Date();
      var dd = String(date.getDate()).padStart(2, '0');
      var mm = String(date.getMonth() + 1).padStart(2, '0');
      var yyyy = date.getFullYear();
      var hh = date.getHours();
      var mmm = date.getMinutes();
      var newDate = mm + '/' + dd + '/' + yyyy + ' ' + hh + ':' + mmm;
      return newDate;
    }
  }, {
    key: "onSave",
    value: function onSave() {
      var Ndate = this.getDate();
      var Ntitle = document.getElementById("titlebox").value;
      var Nwords = document.getElementById("entrybox").value;
      this.setState({ title: Ntitle, current_text: Nwords, date: Ndate });
      //alert("Saved!");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.state);
      var viewLink = "./PreviousEntriesView.html";
      var EditLink = "./EditView.html";
      return React.createElement(
        "div",
        { style: style.entryBox },
        React.createElement(
          "h1",
          { style: style.title },
          "Current Journal Entry"
        ),
        React.createElement(
          "p",
          { style: style.date },
          this.state.date
        ),
        React.createElement("textarea", { rows: "1", id: "titlebox", cols: "80", placeholder: "Write a title here..." }),
        React.createElement("textarea", { rows: "40", id: "entrybox", cols: "80", placeholder: "Write anything here..." }),
        React.createElement(
          "button",
          { style: style.button, onClick: function onClick() {
              window.location = viewLink;
            } },
          "Previous Entries"
        ),
        React.createElement(
          "button",
          { style: style.button, onClick: function onClick() {
              _this2.onSave();
            } },
          "Save"
        )
      );
    }
  }]);

  return JournalEntry;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(JournalEntry, null), contentNode);