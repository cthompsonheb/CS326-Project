"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = {
  current_text: "",
  date: "Today",
  title: "An Existing Journal Entry",
  read: 1
};

var style = {
  root: {
    backgroundImage: "url('https://cdn.hipwallpaper.com/i/12/15/g8VhaE.jpg')",
    backgroundSize: '100%',
    overflow: "hidden"
  },
  entryBox: {
    maxWidth: "100%"
  },
  button: {
    margin: "10px",
    width: "15%"

  },
  titlebox: {
    width: "50%",
    display: "block",
    margin: "auto",
    backgroundImage: "url('https://wallpaperplay.com/walls/full/8/a/d/103355.jpg')",
    backgroundSize: 'cover',
    overflow: "hidden"
  },
  textbox: {
    width: "50%",
    display: "block",
    margin: "auto",
    backgroundImage: "url('https://wallpaperplay.com/walls/full/8/a/d/103355.jpg')",
    backgroundSize: 'cover',
    overflow: "hidden"
  },
  title: {
    color: "white",
    margin: "10px"
  },
  date: {
    color: "white"
  }

  // This grabs the DOM element to be used to mount React components.
};var contentNode = document.getElementById("contents");

var ViewEntry = function (_React$Component) {
  _inherits(ViewEntry, _React$Component);

  function ViewEntry() {
    _classCallCheck(this, ViewEntry);

    var _this = _possibleConstructorReturn(this, (ViewEntry.__proto__ || Object.getPrototypeOf(ViewEntry)).call(this));

    _this.state = state;
    _this.onEdit = _this.onEdit.bind(_this);
    _this.onSave = _this.onSave.bind(_this);
    return _this;
  }

  _createClass(ViewEntry, [{
    key: "getDate",
    value: function getDate() {
      var date = new Date();
      var dd = String(date.getDate()).padStart(2, '0');
      var mm = String(date.getMonth() + 1).padStart(2, '0');
      var yyyy = date.getFullYear();
      var hh = date.getHours();
      var mmm = date.getMinutes();
      var time = "AM";
      if (hh > 12) {
        hh -= 12;
        time = "PM";
      }
      if (mmm < 10) mmm = "0" + mmm.toString();
      var newDate = mm + '/' + dd + '/' + yyyy + ' ' + hh + ':' + mmm + time;
      return newDate;
    }
  }, {
    key: "onEdit",
    value: function onEdit() {
      this.setState({ read: 0 });
    }
  }, {
    key: "onSave",
    value: function onSave() {
      var Ndate = "Saved: " + this.getDate();
      var Ntitle = document.getElementById("titlebox").value;
      var Nwords = document.getElementById("entrybox").value;
      this.setState({ title: Ntitle, current_text: Nwords, date: Ndate, read: 1 });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var viewLink = "./PreviousEntriesView.html";

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { style: style.root },
          React.createElement(
            "div",
            { className: "container", style: style.entryBox },
            React.createElement(
              "div",
              { className: "mx-auto" },
              React.createElement(
                "h1",
                { className: "text-center", style: style.title },
                "View Journal Entry"
              ),
              React.createElement(
                "p",
                { className: "text-center", style: style.date },
                this.state.date
              ),
              React.createElement("textarea", { rows: "1", style: style.titlebox, id: "titlebox", cols: "80", defaultValue: "Existing Journal Entry", readOnly: this.state.read }),
              React.createElement("textarea", { rows: "40", style: style.textbox, id: "entrybox", cols: "80", defaultValue: "This is an example entry. Look at all this fun text. Try to edit me.", readOnly: this.state.read }),
              React.createElement(
                "div",
                { className: "text-center" },
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
                      _this2.onEdit();
                    } },
                  "Edit"
                ),
                React.createElement(
                  "button",
                  { style: style.button, onClick: function onClick() {
                      _this2.onSave();
                    } },
                  "Save"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ViewEntry;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(ViewEntry, null), contentNode);